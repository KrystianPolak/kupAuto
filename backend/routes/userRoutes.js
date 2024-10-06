const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


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
      res.status(200).json({ message: 'Zalogowano pomyślnie' });
    } catch (error) {
      res.status(500).json({ message: 'Błąd serwera', error });
    }
  });
  

module.exports = router;