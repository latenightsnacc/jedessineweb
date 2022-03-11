import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import MemberDashboard from './dashboard/Member';
import { AuthProvider } from './context/useAuth';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/api/auth/signin"} element={<Login />} />
          <Route path={"/dashboard/member"} element={<MemberDashboard />} />
        </Routes>
      </AuthProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
