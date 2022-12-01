import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Nav-Bar
import Navbar from "./components/layout/navbar";

// Pages
import Login from "./pages/login/login";
import ViewProfile from "./pages/landing/landing";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/register";
import Apartment from "./pages/apartment/apartment";


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/landing" element={ <ViewProfile /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/apartment" element={ <Apartment /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
