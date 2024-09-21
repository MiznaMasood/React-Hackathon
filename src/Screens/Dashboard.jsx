import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard/overview">
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/users">
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/settings">
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/reports">
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/help">
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
        <Outlet /> {/* Nested routes will be rendered here */}
      </Box>
    </Box>
  );
};

export default Dashboard;



