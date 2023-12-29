
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './userlist';
import Profile from './profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
       <Route index element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
