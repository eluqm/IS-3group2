import React from "react";
import { Footer } from "../../models/footer";

import './footer.css';

const FooterField: React.FC<Footer> = ({ question, message }) => {
  return (
    <div className = {'Footer'}>
      <p className = {'Footer-parr'}> { question } </p>
      <p className = {'Footer-parr'}> { message } </p>
    </div>
  );
};

export default FooterField;
