import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
