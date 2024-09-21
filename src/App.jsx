import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from './Screens/UserList';
import UserForm from './Screens/UserForm';
import Products from './Screens/Products';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Cart from './Screens/Cart';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';

import AuthRoutes from './Screens/Routes/AuthRoutes';
import ProtectedRoutes from './Screens/Routes/ProtectedRoutes';

const App = () => {
  return (
    <>

      <Routes>
        {/* Public Routes */}
        <Route element={<AuthRoutes />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
     
    </>
  );
};

export default App;



