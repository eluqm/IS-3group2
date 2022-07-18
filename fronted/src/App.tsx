import React from 'react';
import FooterField from "./components/footer/footer";
import CNavbar from "./components/navbar/navbar";

import Button from "react-bootstrap/Button";

import './App.css';

const App: React.FC = () => {
  return (
    <div className = {'MainApp'}>
      <CNavbar title = {'BeResearcher'}></CNavbar>
      <FooterField question={'Footer'} message={'FooterMessage'}></FooterField>
    </div>
  );
};

export default App;
