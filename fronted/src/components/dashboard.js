import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  const refreshToken = async () => {
    try {
      const res = await axios.get('').then(() => alert('success')).catch(
        (error) => console.log(`new error in ${error}`)
      );
    } catch (error) {
    }
  }

  return (
    <div className={'container mt-5'}>
      <h1 className={'tile'}> Bienvenido de nuevo: </h1>
    </div>
  );
};

export default Dashboard;
