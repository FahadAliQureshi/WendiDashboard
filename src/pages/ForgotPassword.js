import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, TextField, Button, Typography } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a request to your backend to initiate the reset password process
    // Handle the response and show appropriate messages to the user
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{background:"#4A276B"}}>
            Reset Password
          </Button>
        </Stack>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;
