import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      rememberMe,
    };

    setLoading(true);
    console.log('email ai', email);
    return;

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful response (e.g., navigate to dashboard)
        navigate('/dashboard', { replace: true });
      } else {
        // Handle error response (e.g., show error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    setLoading(false);
  };


  const handleForgotPasswordClick = () => {
    navigate('/forgotpassword');
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" to="/forgotpassword" underline="hover" style={{cursor:"pointer"}}>
         <span onClick={handleForgotPasswordClick}>Forgot password?</span> 
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} loading={loading} sx={{background:"#4A276B"}}>
        Login
      </LoadingButton>
    </>
  );
}
