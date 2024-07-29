
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import LMS from './pages/LMS';
import Communication from './pages/Communication';
import EventManagement from './pages/EventManagement';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;


