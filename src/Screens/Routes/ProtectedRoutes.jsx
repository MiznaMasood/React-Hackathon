import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = localStorage.getItem('UserID');
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
