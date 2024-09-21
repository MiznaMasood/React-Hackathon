// src/Store/store.js
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../Store/Slices/cartSlice';
import userSlice from './Slices/userSlice';

export const store = configureStore({
  reducer: {
   
    cart: cartReducer,
    users: userSlice,
  },
});




