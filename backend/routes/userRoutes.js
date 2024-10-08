const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'superrefreshsecret';
let refreshTokens = [];

const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*]/;
    
    if (password.length < minLength) {
      return 'Hasło musi mieć co najmniej 8 znaków.';
    }
    if (!hasNumber.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną cyfrę.';
    }
    if (!hasSpecialChar.test(password)) {
      return 'Hasło musi zawierać co najmniej jeden znak specjalny.';
    }
    return null;  // Brak błędów
  };

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  const passwordError = validatePassword(password);
  if (passwordError) {
    return res.status(400).json({ message: passwordError });
  }
  
  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Użytkownik o takim adresie email już istnieje.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username,
        email: email.toLowerCase(),
        password: hashedPassword
      });
    await newUser.save();

    res.status(201).json({ message: 'Użytkownik zarejestrowany pomyślnie' });
  } catch (error) {
    res.status(500).json({ message: 'Błąd serwera', error });
  }
});

// Logowanie użytkownika
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: 'Nieprawidłowy email lub hasło' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Nieprawidłowy email lub hasło' });
    }

    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    const refreshToken = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,    
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      maxAge: 7 * 24 * 60 * 60 * 1000 
    });
    res.status(200).json({ accessToken, refreshToken, message: 'Zalogowano pomyślnie' });
  } catch (error) {
    res.status(500).json({ message: 'Błąd serwera', error });
  }
});

router.post('/refresh-token', async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ message: 'Brak dostępu' });
  }

  try {
    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(403).json({ message: 'Nieprawidłowy token odświeżania' });
    }

    jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token jest nieprawidłowy lub wygasł' });
      }

      const newAccessToken = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: 'Błąd serwera', error });
  }
});

router.post('/logout', async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  try {
    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(403).json({ message: 'Nieprawidłowy token' });
    }

    user.refreshToken = null;
    await user.save();

    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'Wylogowano pomyślnie' });
  } catch (error) {
    res.status(500).json({ message: 'Błąd serwera', error });
  }
});


const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Brak tokena' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token jest nieprawidłowy' });
    req.user = user; 
    next();
  });
};


router.get('/getLoggedUSerData', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'Użytkownik nie znaleziony' });
    
    res.status(200).json(user); 
  } catch (error) {
    res.status(500).json({ message: 'Błąd serwera' });
  }
});


module.exports = router;