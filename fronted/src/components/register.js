import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().slice(0, 10);
    try {
      console.log(`error :'v  ${name} ${user} ${password} ${date}`)
      await axios.post('http://localhost:5000/res/user', {
        namecompleto: name,
        pass: password,
        user: user,
        fecharegistro: date
      });

      setName('');
      setUser('');
      setPassword('');

      history.push('/');
    } catch (error) {
      if (error.response) {
        console.log(`error :'v  ${error.response.data}`)
      }
      throw new Error(error);
    }
  }

  return (
    <section className={'hero has-background-grey-light is-fullheight is-fullwidth'}>
      <div className={'hero-body'}>
        <div className={'container'}>
          <div className={'column is-centered'}>
            <div className={'column is-4-desktop'}>
              <form onSubmit={Register} className={'box'}>
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