import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import redirect from "react-router-dom/es/Redirect";

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mess, setMess] = useState('');

  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/res/user/auth', {
        user: user,
        pass: password
      });
      history.push('/dashboard');
      setMess(`Ingresando como ${user}`)
    } catch (error) {
      if (error.response) {
        setMess(`Error al ingresar con ${user}`)
      }
    }
  }

  return (
    <section className={'hero has-background-grey-light is-fullheight is-fullwidth'}>
      <div className={'hero-body'}>
        <div className={'container'}>
          <div className={'column is-centered'}>
            <div className={'column is-4-desktop'}>
              <form onSubmit={Auth} className={'box'}>
                <p className={'has-text-centered'}> {mess} </p>
                <div className={'field mt-5'}>
                  <label className={'label'}> Usuario o Email </label>
                  <div className={'controls'}>
                    <input type={'text'}
                           className={'input'}
                           placeholder={'user1@gmail.com'}
                           minLength={4}
                           required={true}
                           value={user} onChange={(e)=> setUser(e.target.value)} />
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <label className={'label'}> Contraseña </label>
                  <div className={'controls'}>
                    <input type={'password'}
                           className={'input'}
                           placeholder={'******'}
                           minLength={1}
                           required={true}
                           value={password} onChange={(e)=> setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <button className={'button is-success is-fullwidth'}> Login </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
