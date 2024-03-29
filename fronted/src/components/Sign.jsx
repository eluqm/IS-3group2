import React, { useState } from 'react'
import { AcademicCapIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Sign() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const history = useHistory();

  const Sign = async (e) => {
    e.preventDefault();
    let date = new Date().toISOString().slice(0, 10);
    try {
      await axios.post('http://localhost:5001/re/sign', {
        namecompleto: name, user: user, pass: pass, fecharegistro: date
      }).then(() => alert(`Usuario ${user} registrado!`)).catch(
        (err) => console.log(`error con ${err}`)
      );
      history.push('/login')
    } catch (err) {
      if (err.response) {
        alert(`Error al registrar a ${name}`);
      }
    }
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-black text-gray-900"> Regístrate Ahora </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O{' '}
              <a href="/login" className="font-medium text-cyan-700 hover:text-cyan-500">
                Si ya tienes cuenta
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={Sign}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="text"
                  required={true}
                  value={name} onChange = {(e) => setName(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre Completo"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  required={true}
                  value={user} onChange = {(e) => setUser(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Usuario"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required={true}
                  value={pass} onChange = {(e) => setPass(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<AcademicCapIcon className="h-5 w-5 text-white-500 group-hover:text-cyan-400" aria-hidden="true" />
							</span>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};
