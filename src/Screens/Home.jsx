import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Wrapper to ensure footer is always at the bottom */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content area */}
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* Main heading */}
              <Grid item xs={12}>
                <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' , marginTop:'30px' }}>
                  Welcome to Our Application
                </Typography>
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <Typography variant="h6" align="center" color="textSecondary">
                  Explore the best features and services we offer to enhance your experience.
                </Typography>
              </Grid>

              {/* Call to action button */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ marginTop: 4, padding: '12px 24px', fontSize: '18px', borderRadius: '8px' }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer always at the bottom */}
        <Footer />
      </Box>
    </>
  );
};

export default Home;
