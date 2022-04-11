import "./App.css";
import Header from "./components/layout/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Home from "./pages/index";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Ourservices from "./pages/Ourservices";

function App() {
  return (
    <>
      {/* <div className="header"> */}
        <Router>
          <CssBaseline />
          <Header />
          <Container fixed>
            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/Aboutus' element={<Aboutus/>} />
              <Route path='/Ourservices' element={<Ourservices/>} />
              <Route path='/Contactus' element={<Contactus/>} />
            </Routes>
          </Container>         
        </Router>
      {/* </div> */}
    </>
  );
  }

  export default App;