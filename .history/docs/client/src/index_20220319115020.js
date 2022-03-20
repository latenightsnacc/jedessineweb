import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
import MemberDashboard from './dashboard/Member';
import MemberAttendance from './dashboard/member/ViewAttendance';
import MemberDues from './dashboard/member/ViewDues';
import SecretaryGeneralDashboard from './dashboard/SecretaryGeneral';
import Notes from './dashboard/secretarygeneral/Notes';
import New from './dashboard/secretarygeneral/New';
import Members from './dashboard/secretarygeneral/Members';
import Attendance from './dashboard/secretarygeneral/Attendance';
import RecordAttendance from './dashboard/secretarygeneral/RecordAttendance';
import Reports from './dashboard/secretarygeneral/Reports';
import Sevents from './dashboard/secretarygeneral/Events';
import Minutes from './dashboard/secretarygeneral/Minutes';
import MonthlyAttendance from './dashboard/secretarygeneral/MonthlyAttendance';
import WeeklyAttendance from './dashboard/secretarygeneral/WeeklyAttendance';
import { AuthProvider } from './context/useAuth';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/api/auth/signin"} element={<Login />} />
          <Route path={"/api/auth/signup"} element={<Register />} />
          <Route path={"/dashboard/member"} element={(
            <ProtectedRoute>
              <MemberDashboard />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/member/attendance"} element={(
            <ProtectedRoute>
              <MemberAttendance />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/member/dues"} element={(
            <ProtectedRoute>
              <MemberDues />
            </ProtectedRoute>) } 
          />
          
          <Route path={"/dashboard/secretarygeneral"} element={(
            <ProtectedRoute>
              <SecretaryGeneralDashboard />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral/members"} element={(
            <ProtectedRoute>
              <Members />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral/notes"} element={(
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral/attendance"} element={(
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral/events"} element={(
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>) } 
          />
          <Route path={"/dashboard/secretarygeneral/reports"} element={(
            <ProtectedRoute>
              <Reports />
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
