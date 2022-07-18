import React from 'react';
import FooterField from "./components/footer/footer";
import CNavbar from "./components/navbar/navbar";

import './App.css';

import FoTx from "./static/text";

const App: React.FC = () => {
  return (
    <div className = {'MainApp'}>
      <CNavbar title = {'BeResearcher'}></CNavbar>
      <FooterField question={'Footer'}></FooterField>
    </div>
  );
};

export default App;
