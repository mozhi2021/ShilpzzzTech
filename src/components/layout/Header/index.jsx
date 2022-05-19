import React from "react";
import Titlebar from "./Titlebar";
import NavBar from "./NavBar";
import TitleBarnew from "./TitleBarnew"



function Header() {
  return (
    <div>

      {/* <Titlebar/>  */}
      <TitleBarnew/> 

      <NavBar/>
   </div>
  );
}

export default Header;