import React from 'react';
import { Box, Container, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d47a1',
        color: '#fff',
        padding: '40px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ backgroundColor: '#fff', opacity: 0.3, marginBottom: 3 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Section - Company Info */}
          <Typography variant="body2" sx={{ textAlign: 'center', flexBasis: '100%', mb: 2 }}>
            &copy; 2024 Your Company. All Rights Reserved.
          </Typography>

          {/* Center Section - Navigation Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              marginBottom: '16px',
            }}
          >
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '18px', '&:hover': { color: '#bbdefb' } }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '18px', '&:hover': { color: '#bbdefb' } }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '18px', '&:hover': { color: '#bbdefb' } }}
            >
              Contact
            </Link>
          </Box>

          {/* Right Section - Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton
              href="https://facebook.com"
              color="inherit"
              aria-label="Facebook"
              sx={{ '&:hover': { color: '#bbdefb' } }}
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              color="inherit"
              aria-label="Twitter"
              sx={{ '&:hover': { color: '#bbdefb' } }}
            >
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              color="inherit"
              aria-label="Instagram"
              sx={{ '&:hover': { color: '#bbdefb' } }}
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;