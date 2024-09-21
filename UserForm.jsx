import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/Slices/userSlice';
import { Box, TextField, Button, FormControl, InputLabel, Grid, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { collection, addDoc } from 'firebase/firestore'; // Import Firebase functions
import { database } from '../Config/firebase'; // Firebase Firestore instance

const UserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(Math.floor(Math.random() * 1000));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    
    // Add user to Redux store
    dispatch(addUser(newUser));

    // Save user to Firebase Firestore
    try {
      await addDoc(collection(database, 'users'), newUser);
      console.log('User added to Firebase');
    } catch (error) {
      console.error('Error adding user to Firebase:', error);
    }

    // Clear form fields
    setName('');
    setEmail('');
  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              maxWidth: '500px',
              width: '100%',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h4" gutterBottom align="center">
              Add New User
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Name</InputLabel>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Email</InputLabel>
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Password</InputLabel>
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <TextField
                    label="Role"
                    type="role"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleSubmit}
                  sx={{ padding: '10px 20px', fontSize: '16px' }}
                >
                  Add User
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default UserForm;
