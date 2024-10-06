import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


const Login = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  
  
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  
            email,
            password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setSuccessMessage('Zalogowano sie!');
        } else {
          setErrors({ form: data.message });
          setSuccessMessage('');
        }
      } catch (error) {
        setErrors({ form: 'Błąd połączenia z serwerem' });
        setSuccessMessage(''); 
      }
    }
  
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
      }}><div>
      <Typography level="h3" component="h1">
        Witaj!
      </Typography>
      <Typography level="body-lg" >Zaloguj się</Typography>
    </div>
    {errors.form && (
            <Typography color="danger" fontSize="md">
              {errors.form}
            </Typography>
          )}
    <FormControl>
    <FormLabel>Email</FormLabel>
    <Input
        // html input attribute
        name="email"
        type="email"
        placeholder="email"
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
    />
    </FormControl>
    <FormControl>
    <FormLabel>Hasło</FormLabel>
    <Input
        name="password"
        type="password"
        placeholder="hasło"
        value={password}  
        onChange={(e) => setPassword(e.target.value)}
    />
    </FormControl>
    <Button sx={{ mt: 1,
        backgroundColor: '#007BFF',
    }}
    onClick={handleSubmit}
    >
    Zaloguj się
    </Button>
    {successMessage && (
            <Typography color="success" fontSize="lg" textAlign="center" fontWeight="bold">
              {successMessage}
            </Typography>
          )}
    <Typography
    endDecorator={<Link href="/sign-up">Zarejestruj się</Link>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
    >
    Nie masz konta? 
    </Typography>
    </Sheet>
    </CssVarsProvider>
    </>
  )
}

export default Login