import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from "../src/Components/Home";
// import Flight from "./Pages/Gallery";
import './App.css';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import FlightCard from './Components/Flightcard';
import Booking from './Pages/Booking';
import Receipt from './Pages/Receipt';
import Payment from './Pages/Payment';
import Gallery from './Pages/Gallery';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminDashboard from './Dashboard/AdminDashboard';
import UserDashboard from './Dashboard/UserDashboard';

function App() {

  return (
    
    <>
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/flightcard" element={<FlightCard/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/receipt" element={<Receipt/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/booking" element={<Booking/>}/>

          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
