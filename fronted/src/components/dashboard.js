import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken().then()
  }, []);

  const refreshToken = async () => {
    try {
      const res = await axios.get('http://localhost:5000/res/token');
      setToken(res.data.accessToken);
      const decoded = jwt_decode(res.data.accessToken);
      console.log(decoded.idU);  //
      setName(decoded.name);
    } catch (error) {
      console.log(`error in ${error}`);
    }
  }

  return (
    <div className={'container mt-5'}>
      <h1 className={'title'}> Bienvenido de nuevo: {name} </h1>
    </div>
  );
};

export default Dashboard;
