// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Navbar from "./components/Navbar"; // Import Navbar
import Hotels from "./pages/Hotels";
import Customer from "./components/Customer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/hotels" 
          element={
            <PrivateRoute>
              <Hotels />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/Customer" 
          element={
            <PrivateRoute>
              <Customer />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
