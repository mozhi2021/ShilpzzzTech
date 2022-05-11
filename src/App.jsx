import "./App.css";
import Header from "./components/layout/Header";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Home from "./pages/index";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import Ourservices from "./pages/Ourservices";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <div className="bgimage">
          <Header />
          
          <Container fixed>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/Ourservices" element={<Ourservices />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </Container>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

// const NavBar = () => {
//   return (
//     <nav>
//       <NavLink
//         to="/"
//         className={({ isActive }) => (isActive ? "link-active" : "link")}
//       >
//         Home
//       </NavLink>
//     </nav>
//   );
// };

export default App;
