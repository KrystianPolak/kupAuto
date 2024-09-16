import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Walidacja e-maila
    if (!email) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Podaj poprawny adres email';
    }

    // Walidacja hasła
    if (!password) {
      newErrors.password = 'Hasło jest wymagane';
    } else if (password.length < 6) {
      newErrors.password = 'Hasło musi mieć co najmniej 6 znaków';
    }

    // Walidacja powtórzonego hasła
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Musisz powtórzyć hasło';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Hasła muszą być identyczne';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Tutaj możesz obsłużyć logikę po poprawnej rejestracji
      console.log('Formularz wysłany!', { email, password, confirmPassword });
    }
  };

  return (
    <>
      <CssVarsProvider>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 2, // margin top & bottom
            py: 7, // padding top & bottom
            px: 5, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sd',
            boxShadow: 'lg',
          }}
        >
          <div>
            <Typography level="h3" component="h1">
              Zarejestruj się
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
            />
            {errors.email && (
              <Typography color="danger" fontSize="sm">
                {errors.email}
              </Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Hasło</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
            />
            {errors.password && (
              <Typography color="danger" fontSize="sm">
                {errors.password}
              </Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Powtórz hasło</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="powtórz hasło"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <Typography color="danger" fontSize="sm">
                {errors.confirmPassword}
              </Typography>
            )}
          </FormControl>
          <Button
            sx={{
              mt: 1,
              backgroundColor: '#007BFF',
            }}
            onClick={handleSubmit} // Obsługa kliknięcia zamiast przesłania formularza
          >
            Zarejestruj się
          </Button>
          <Typography
            endDecorator={<Link href="/login">Zaloguj się</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Masz już konto?
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </>
  );
};

export default Signup;
