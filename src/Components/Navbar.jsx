import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Stack, Badge } from '@mui/material';
import { Menu, ShoppingCart, Logout, Login } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total quantity
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Assume user is logged in initially
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication-related state if you have one
    setIsAuthenticated(false); // Mark user as logged out
    navigate('/'); // Redirect to the login form page
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hackathon
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <Button component={Link} to="/products" color="inherit">Products</Button>
          <Button component={Link} to="/userForm" color="inherit">UserForm</Button>
          <Button component={Link} to="/userList" color="inherit">UserList</Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {isAuthenticated ? (
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout />
            </IconButton>
          ) : (
            <IconButton component={Link} to="/" color="inherit">
              <Login />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




