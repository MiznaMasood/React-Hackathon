import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get the user object

      // Save user info to local storage
      localStorage.setItem('user', JSON.stringify({ email: user.email }));

      navigate('/home'); // Redirect to home page on successful signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSignup}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <Link href="/login" underline="hover" onClick={() => navigate('/login')}>
            Log in here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;



