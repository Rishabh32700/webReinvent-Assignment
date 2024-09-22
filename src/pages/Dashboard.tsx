import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <div>Welcome to the dashboard, {user}</div>;
};

export default Dashboard;
