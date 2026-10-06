import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';
import PrivateRoute from './services/PrivateRoute'
import Dashboard from './dashboard/Dashboard';
import Course from './dashboard/course/Course';
import CourseModule from './dashboard/coursemodule/CourseModule';
import CourseFee from './dashboard/coursefees/CourseFee';
import Sidebar from './dashboard/sidebar/Sidebar';
import Login from './authentication/Login';
import Navbar from './dashboard/sidebar/Navbar';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="light-style layout-menu-fixed">
          <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<ProtectedRoutes />} />
              </Routes>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

function ProtectedRoutes() {
  return (
    <>
    
      <Sidebar />
      <div className="layout-page">
      <Navbar />
      <div className="content-wrapper">
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Course />} /> 
          <Route path="/coursemodule" element={<CourseModule />} />
          <Route path="/coursefees" element={<CourseFee />} />

        </Route>
      </Routes>
      </div>
      </div>
    </>
  );
}


export default App;
