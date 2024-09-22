import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import ProtectedRoute from './pages/ProtectedRoute';
import SignUp from './pages/SignUp'; // Assuming you also have a SignUp page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect default route "/" to "/signin" */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Define your existing routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
