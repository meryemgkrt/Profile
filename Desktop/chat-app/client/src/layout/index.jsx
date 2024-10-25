import React from "react";
import logo from "../img/logo.png"
const AuthLayouts = ({children}) => {
  return <>
  <header  className="flex items-center justify-center h-20 py-3 bg-white shadow-md"
 >
    <img src={logo} alt="logo" width={180} height={600} />
   
  </header>
  
  {children}
  </>;
};

export default AuthLayouts;
