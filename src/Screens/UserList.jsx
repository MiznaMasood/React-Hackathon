import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const UserList = () => {
  const users = useSelector((state) => state.users.users);

  if (!users) return <Box sx={{ padding: 2 }}>Loading...</Box>;

  if (!Array.isArray(users)) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" color="error">
          Error: Users data is not an array
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensures content takes full height of the screen
          justifyContent: 'space-between', // Push footer to the bottom
          backgroundColor: '#f4f6f8',  // Light grey background
        }}
      >
        <Box sx={{ padding: '20px 0', textAlign: 'center', flexGrow: 1 }}>
          <Paper
            elevation={3}
            sx={{
              margin: '20px auto',   // Center horizontally
              padding: '20px',
              maxWidth: '900px',     // Width limit on large screens
              width: '80%',          // Responsive width for small screens
              backgroundColor: '#fff',
              borderRadius: '12px',  // Rounded corners
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2', marginTop:"50px" }}>
              Users List
            </Typography>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
};

export default UserList;


