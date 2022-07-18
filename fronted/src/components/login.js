import React from 'react';

const Login = () => {
  return (
    <section className={'hero has-background-grey-light is-fullheight is-fullwidth'}>
      <div className={'hero-body'}>
        <div className={'container'}>
          <div className={'column is-centered'}>
            <div className={'column is-4-desktop'}>
              <form className={'box'}>
                <div className={'field mt-5'}>
                  <label className={'label'}> Usuario o Email </label>
                  <div className={'controls'}>
                    <input type={'text'}
                           className={'input'}
                           placeholder={'user1@gmail.com'}
                           minLength={4}
                           required={true}/>
                  </div>
                </div>
                <div className={'field mt-5'}>
                  <label className={'label'}> Contraseña </label>
                  <div className={'controls'}>
                    <input type={'password'}
                           className={'input'}
                           placeholder={'******'}
                           minLength={1}
                           required={true}/>
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
