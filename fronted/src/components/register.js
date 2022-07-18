import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mess, setMess] = useState('');

  const history = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().slice(0, 10);
    try {
      await axios.post('http://localhost:5000/res/user', {
        namecompleto: name,
        pass: password,
        user: user,
        fecharegistro: date
      }).then(() => alert('success')).catch(
        (error) => console.log(`new error in ${error}`)
      );

      setMess(`Cuenta Registrada para ${name}`);
      setName('');
      setUser('');
      setPassword('');

      history.push('/login');
    } catch (error) {
      if (error.response) {
        setMess(`Error al registrarse en ${name}`)
      }
    }
  }

  return (
    <section className={'hero has-background-grey-light is-fullheight is-fullwidth'}>
      <div className={'hero-body'}>
        <div className={'container'}>
          <div className={'column is-centered'}>
            <div className={'column is-4-desktop'}>
              <form onSubmit={Register} className={'box'}>
                <p className={'has-text-centered'}> {mess} </p>
                <div className={'field mt-5'}>
                  <label className={'label'}> Nombre </label>
                  <div className={'controls'}>
                    <input type={'text'}
                           className={'input'}
                           placeholder={'PhD. Jack Sparrow'}
                           minLength={4}
                           required={true}
                           value={name} onChange={(e)=> setName(e.target.value)} />
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <label className={'label'}> Usuario o Email </label>
                  <div className={'controls'}>
                    <input type={'text'}
                           className={'input'}
                           placeholder={'jsparrow@gmail.uk.com'}
                           minLength={4}
                           required={true}
                           value={user} onChange={(e)=> setUser(e.target.value)}/>
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <label className={'label'}> Contraseña </label>
                  <div className={'controls'}>
                    <input type={'password'}
                           className={'input'}
                           placeholder={'******'}
                           minLength={5}
                           required={true}
                           value={password} onChange={(e)=> setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <button className={'button is-success is-fullwidth'}> Register </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Register;