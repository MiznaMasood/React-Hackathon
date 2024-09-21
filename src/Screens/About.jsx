import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Divider,
} from '@mui/material';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      {/* Wrapper to push footer to the bottom */}
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 10 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 5 }}>
                Learn more about our application and the team behind it. We aim to
                provide the best service to our users.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ borderRadius: '8px' }}>
                Know More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                To provide innovative solutions and exceptional user experience.
              </Typography>
              <Divider sx={{ my: 5 }} />
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To become the leading provider of user-centric applications.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default About;
