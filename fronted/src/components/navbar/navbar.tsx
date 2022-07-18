import React from "react";
import { Navbar } from "../../models/navbar";

import './navbar.css';

const CNavbar: React.FC<Navbar> = ({ title }) => {
  return (
    <div className = {'Navbar'}>
      <span className = {'CNav-Title'}> {title} </span>
    </div>
  );
};

export default CNavbar;
