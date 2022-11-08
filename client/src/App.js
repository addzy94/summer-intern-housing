import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// Pages
import Login from "./pages/login/login";
import ViewProfile from "./pages/landing/landing";
import Profile from "./pages/profile/profile";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/landing" element={ <ViewProfile /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
