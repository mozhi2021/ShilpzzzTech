import "./App.css";
import Header from "./components/layout/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Home from "./pages";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Ourservices from "./pages/Ourservices";

function App() {
  return (
    <>
      {/* <div className="header"> */}
        <Router>
          <CssBaseline />
          <Container fixed>
            <Header />
            <Routes>
              <Route path='/' exact component={Home} />
              <Route path='/Aboutus' component={Aboutus} />
              <Route path='/Ourservices' component={Ourservices} />
              <Route path='/Contactus' component={Contactus} />
            </Routes>
          </Container>         
        </Router>
      {/* </div> */}
    </>
  );
  }

  export default App;