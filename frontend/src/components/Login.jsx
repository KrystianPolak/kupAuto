import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


const Login = () => {
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
    <FormControl>
    <FormLabel>Email</FormLabel>
    <Input
        // html input attribute
        name="email"
        type="email"
        placeholder="email"
    />
    </FormControl>
    <FormControl>
    <FormLabel>Hasło</FormLabel>
    <Input
        name="password"
        type="password"
        placeholder="hasło"
    />
    </FormControl>
    <Button sx={{ mt: 1,
        backgroundColor: '#007BFF',
    }}>
    Zaloguj się
    </Button>
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