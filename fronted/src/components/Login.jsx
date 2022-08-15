import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/outline';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { saveinLocalStorage } from '../utils/utils';

export default function Login() {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [mess, setMess] = useState('');

	const history = useHistory();

	const Login = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:5001/re/auth', {
				user: user, pass: pass
			});
			saveinLocalStorage('token', res.data.token);
			history.push('/dash');
			console.log(res.data.token);
		} catch (err) {
			alert('Error al iniciar sesión!');
		}
	};

	return (
		<>
			<div className="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-black text-gray-900"> Ingresa con tu cuenta </h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							O{' '}
							<a href="/sign" className="font-medium text-cyan-700 hover:text-cyan-500">
								Registrate Ahora
							</a>
						</p>
					</div>
					<form className="mt-8 space-y-6" onSubmit={Login}>
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									autoComplete="email"
									value={user} onChange={(e) => setUser(e.target.value)}
									required={true}
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
									value={pass} onChange={(e) => setPass(e.target.value)}
									required={true}
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Contraseña"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
								/>
								<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
									Recordar usuario
								</label>
							</div>

							<div className="text-sm">
								<a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
									Olvidaste tu contraseña?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
							>
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<LockClosedIcon className="h-5 w-5 text-white-500 group-hover:text-cyan-400" aria-hidden="true" />
								</span>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
};
