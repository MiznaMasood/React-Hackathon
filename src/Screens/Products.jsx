import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CardActions 
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/Slices/cartSlice';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ 
      id: product.id, 
      quantity: 1, 
      title: product.title, 
      price: product.price, 
      image: product.image || '/default-image.jpg' 
    }));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card sx={{ 
        maxWidth: 345, 
        margin: 2, 
        borderRadius: 5, 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
      }}>
        <img
          src={product.image || '/default-image.jpg'}
          alt={product.title || 'Product Title'}
          style={{ 
            height: 200, 
            objectFit: 'cover', 
            borderRadius: 5 
          }}
        />
        <CardContent sx={{ padding: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              fontSize: 18, 
              lineHeight: 1.5 
            }}
          >
            {product.title || 'Product Title'}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'gray', 
              fontSize: 16 
            }}
          >
            ${product.price || 0.00}
          </Typography>
        </CardContent>
        <CardActions sx={{ 
          padding: 2, 
          justifyContent: 'center', 
          backgroundColor: '#f5f5f5' 
        }}>
          <Button 
            onClick={handleAddToCart} 
            variant="contained" 
            color="primary" 
            sx={{ 
              borderRadius: 5, 
              padding: 1, 
              fontSize: 16 
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar sx={{ position: 'sticky', top: 0, backgroundColor: '#fff' }} />
      <div>
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            padding: 2, 
            justifyContent: 'center', 
            marginTop: 10 
          }}
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </div>
      <Footer sx={{ position: 'relative', bottom: 0, backgroundColor: '#fff' }} />
    </>
  );
};

export default Products;
