import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS Import
import './App.css'; // Custom CSS Import

import { initialUsers } from './data/mockUsers'; 
import AppHeader from './components/AppHeader';
import UserList from './pages/UserList';
import ProfilePage from './pages/ProfilePage';

const LOCAL_STORAGE_KEY = 'campusRecruitmentUsers';

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);
  
  // Custom alert/confirm function
  const confirmAction = (message) => {
      // Since window.confirm/alert is forbidden, we return true to proceed 
      // or false to stop, simulating confirmation. In a real app, this 
      // would be a custom modal component.
      console.log(`ACTION CONFIRMATION: ${message}`);
      return true; 
  };

  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<UserList users={users} setUsers={setUsers} confirmAction={confirmAction} />} />
          <Route path="/profile/:id" element={<ProfilePage users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;