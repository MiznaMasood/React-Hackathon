import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import StaffAdd from './Screens/StaffManagement/StaffAdd';
import StaffList from './Screens/StaffManagement/StaffList';
import StaffEdit from './Screens/StaffManagement/StaffEdit';
import BookingAdd from './Screens/BookingManagement/BookingAdd';
import BookingList from './Screens/BookingManagement/BookingList';
import BookingEdit from './Screens/BookingManagement/BookingEdit';
import CustomerAdd from './Screens/CustomerManagement/CustomerAdd';
import CustomerList from './Screens/CustomerManagement/CustomerList';
import CustomerEdit from './Screens/CustomerManagement/CustomerEdit';
import InventoryAdd from './Screens/InventoryManagement/InventoryAdd';
import InventoryList from './Screens/InventoryManagement/InventoryList';
import InventoryEdit from './Screens/InventoryManagement/InventoryEdit';
import PaymentAdd from './Screens/PaymentManagement/PaymentAdd';
import PaymentList from './Screens/PaymentManagement/PaymentList';
import PaymentEdit from './Screens/PaymentManagement/PaymentEdit';
import RoomManagementAdd from './Screens/RoomManagement/RoomManagementAdd';
import RoomManagementList from './Screens/RoomManagement/RoomManagementList';
import RoomManagementEdit from './Screens/RoomManagement/RoomManagementEdit';
import ManagementAdd from './Screens/ServiceManagement/ManagementAdd';
import ManagementList from './Screens/ServiceManagement/ManagementList';
import ManagementEdit from './Screens/ServiceManagement/ManagementEdit';

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
            <Route path="/staffAdd" element={<StaffAdd/>} /> 
            <Route path="/staffList" element={<StaffList />} />
            <Route path="/staffEdit" element={<StaffEdit />} />
            <Route path="/bookingAdd" element={<BookingAdd />} />
            <Route path="/bookingList" element={<BookingList/>} />
            <Route path="/bookingEdit" element={<BookingEdit/>} />
            <Route path="/customerAdd" element={<CustomerAdd/>} />
            <Route path="/customerList" element={<CustomerList/>} />
            <Route path="/customerEdit" element={<CustomerEdit/>} />
            <Route path="/inventoryAdd" element={<InventoryAdd/>} />
            <Route path="/inventoryList" element={<InventoryList/>} />
            <Route path="/inventoryEdit" element={<InventoryEdit/>} />
            <Route path="/paymentAdd" element={<PaymentAdd/>} />
            <Route path="/paymentList" element={<PaymentList/>} />
            <Route path="/paymentEdit" element={<PaymentEdit/>} />
            <Route path="/roomManagementAdd" element={<RoomManagementAdd/>} />
            <Route path="/roomManagementList" element={<RoomManagementList/>} />
            <Route path="/roomManagementEdit" element={<RoomManagementEdit/>} />
            <Route path="/managementAdd" element={<ManagementAdd/>} />
            <Route path="/managementList" element={<ManagementList/>} />
            <Route path="/managementEdit" element={<ManagementEdit/>} />








 
        </Route>
      </Routes>
     
    </>
  );
};

export default App;



