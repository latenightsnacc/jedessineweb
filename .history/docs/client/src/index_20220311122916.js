import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import MemberDashboard from './dashboard/Member';
import MemberAttendance from './dashboard/member/ViewAttendance';
import MemberDues from './dashboard/member/ViewDues';
import MemberProfile from './dashboard/member/Profile';

import SecretaryGeneralDashboard from './dashboard/SecretaryGeneral';
import { AuthProvider } from './context/useAuth';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/api/auth/signin"} element={<Login />} />
          <Route path={"/dashboard/member"} element={(
            <ProtectedRoute>
              <MemberDashboard />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/member/attendance"} element={(
            <ProtectedRoute>
              <MemberAt />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/member/dues"} element={(
            <ProtectedRoute>
              <MemberDues />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/member/profile"} element={(
            <ProtectedRoute>
              <MemberProfile />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral"} element={(
            <ProtectedRoute>
              <SecretaryGeneralDashboard />
            </ProtectedRoute>) } 
          />
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
