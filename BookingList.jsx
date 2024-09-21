import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import Button from '@mui/material/Button';  
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore'; 
import { database } from '../../Config/firebase';

// Custom TableCell with updated styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'blue', 
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#333', 
  },
}));

// Custom TableRow styling
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#ADD8E6', 
  },
  '&:hover': {
    backgroundColor: '#F8BBD0',
  },
}));

const TableWrapper = styled('div')(({ theme }) => ({
  marginRight: '240px',
  marginLeft: '20px',
  marginTop:'50px',

   // Add left margin for sidebar
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0', // Adjust for smaller screens
  },
}));

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const getBookingList = async () => {
    try {
      const arr = [];
      const bookings = await getDocs(collection(database, 'Bookings')); // Change to 'Bookings'
      bookings.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setBookingList(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookingList();
  }, [refresh]);

  return (
    <TableWrapper>
      <Button
        variant="contained"
        sx={{
          float: 'right',
          marginBottom: '20px',
          marginRight: '20px',
          backgroundColor: '#0056b3', // Purple button
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#C51162', // Darker purple on hover
          },
        }}
        onClick={() => navigate('/bookingAdd')} // Change to navigate to booking add
      >
        Add Booking
      </Button>
      <TableContainer component={Paper} mt={5} sx={{ boxShadow: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Room</StyledTableCell>
              <StyledTableCell align="center">Payment</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingList.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.room}</StyledTableCell>
                <StyledTableCell align="center">{row.payment}</StyledTableCell> 
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default BookingList;
