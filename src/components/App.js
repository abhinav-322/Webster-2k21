import React from 'react';
import Signup from './Signup';
import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <AuthProvider>
         <Container
  className="d-flex align-items-center justify-content-center"
  style={{minHeight: "800px"}}
  >
    <div className="w-100" style={{maxWidth: "500px"}}>
      <BrowserRouter>
       
          <Routes>
              <Route path="" element={<Navbar/>} />
              <Route path="" element={<Main/>} />
              <Route path="/signup" element={<Signup />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/login" element={<Login />}/>
          </Routes>
       
      </BrowserRouter>
  </div>
  </Container>
 </AuthProvider>
  )
  
}

export default App;
