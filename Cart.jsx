import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, incrementQuantity, decrementQuantity } from '../Store/Slices/cartSlice';
import { 
  Button, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  Grid, 
  CardMedia, 
  Divider, 
  Box 
} from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <>
      <Navbar />

      {/* Wrapper for layout and footer positioning */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content area */}
        <Box sx={{ flexGrow: 1 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 4, 
              width: '70%', 
              margin: 'auto', 
              marginTop: 5, 
              marginBottom: 5, 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add shadow for a professional touch
              borderRadius: '12px' // Rounded corners
            }}
          >
            <Typography 
              variant="h4" 
              align="center" 
              sx={{ marginBottom: 3, fontWeight: 'bold' }}
            >
              Shopping Cart
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />

            <List>
              {cart.items.map((item) => (
                <ListItem 
                  key={item.id} 
                  sx={{ 
                    padding: 2, 
                    marginBottom: 2, 
                    border: '1px solid #eee', 
                    borderRadius: '8px' 
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <CardMedia 
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{ 
                          width: '100%', 
                          height: 140, 
                          objectFit: 'contain', 
                          borderRadius: '8px' 
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                        <Typography variant="body2">Price: ${item.price}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <Button 
                          variant="outlined" 
                          size="small" 
                          onClick={() => handleDecrementQuantity(item.id)} 
                          disabled={item.quantity === 1}
                          sx={{ minWidth: '36px' }} // Button width for consistent sizing
                        >
                          -
                        </Button>
                        <Typography 
                          variant="body2" 
                          sx={{ margin: '0 15px', fontWeight: 'bold' }}
                        >
                          {item.quantity}
                        </Typography>
                        <Button 
                          variant="outlined" 
                          size="small" 
                          onClick={() => handleIncrementQuantity(item.id)}
                          sx={{ minWidth: '36px' }}
                        >
                          +
                        </Button>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ fontWeight: 'bold' }}
                      >
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ marginBottom: 3 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography 
                variant="h6" 
                sx={{ fontWeight: 'bold' }}
              >
                ${cart.total.toFixed(2)}
              </Typography>
            </Box>

            <Button 
              variant="contained" 
              color="error" 
              onClick={handleClearCart} 
              sx={{ 
                width: '100%', 
                marginTop: 3, 
                padding: '12px 0', 
                fontSize: '16px' 
              }}
            >
              Clear Cart
            </Button>
          </Paper>
        </Box>

        {/* Footer positioned at the bottom */}
        <Footer />
      </Box>
    </>
  );
};

export default Cart;
