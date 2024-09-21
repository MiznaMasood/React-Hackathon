import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack, Badge } from '@mui/material';
import { Menu, ShoppingCart, Logout, Login } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hotel Management Portal
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
          <NavDropdown title="Staff" id="staff-dropdown">
            <NavDropdown.Item as={Link} to="/staffAdd">Staff Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/staffList">Staff List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Payment" id="payment-dropdown">
            <NavDropdown.Item as={Link} to="/paymentAdd">Payment Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/paymentList">Payment List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Booking" id="booking-dropdown">
            <NavDropdown.Item as={Link} to="/bookingAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/bookingList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Room" id="room-dropdown">
            <NavDropdown.Item as={Link} to="/roomManagementAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/roomList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Customer" id="customer-dropdown">
            <NavDropdown.Item as={Link} to="/customerAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/customerList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="User" id="user-dropdown">
            <NavDropdown.Item as={Link} to="/userAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/userList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Service" id="user-dropdown">
            <NavDropdown.Item as={Link} to="/managementAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/managementList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="ServiceRequest" id="user-dropdown">
            <NavDropdown.Item as={Link} to="/userAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/userList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Inventory" id="user-dropdown">
            <NavDropdown.Item as={Link} to="/inventoryAdd">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/inventoryList">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="Report" id="user-dropdown">
            <NavDropdown.Item as={Link} to="/user/add">Add</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/user/list">List</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Stack>

        <Stack direction="row" spacing={2}>
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

