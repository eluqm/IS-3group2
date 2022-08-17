import DashNav from "../components/DashNav";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FormLabel from "../components/FormLabel";
import { inputstyle, inputstyle2 } from "../utils/styles.utils";
import jwtDecode from "jwt-decode";

export default function Perfil() {
  const data = localStorage.getItem('token');
  const decoded = jwtDecode(data);

  const [namecompleto, setName] = useState('');
  const [pass, setPass] = useState('');
  const [emailcontacto, setEmail] = useState('');
  const [areaRese, setArea] = useState('');
  const [insitucion, setInsti] = useState('');
  const [sobremi, setSobremi] = useState('');

  const history = useHistory();

  const id = decoded.datos.id

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/re/${id}`);
      setName(x.data.namecompleto);
      setPass(x.data.pass);
      setEmail(x.data.emailcontacto);
      setArea(x.data.areaRese);
      setInsti(x.data.insitucion);
      setSobremi(x.data.sobremi);
    }
    fetch();
  }, []);

  const UpdateDataUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/re/${id}`, {
        namecompleto, pass, emailcontacto, insitucion, sobremi
      }).then(() => alert('Perfil Actualizado'));
      history.push('/dash');
    } catch (err) {
      alert('Error al Guardar!')
      console.log(`error in ${err}`);
    }
  }

  return (
    <>
      <DashNav id={id} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900"> Mi Perfil </h3>
                  <p class="mt-1 text-sm text-gray-600"> Aquí puedes guardar tu información de contacto, para que la gente pueda encontrarte fácilmente. </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={UpdateDataUser}>
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-7 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <FormLabel name={'Nombre Completo'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle}
                            value={namecompleto} onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-4 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <FormLabel name={'Institución'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle}
                            value={insitucion} onChange={(e) => setInsti(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-5 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Contraseña'} />
                          <input
                            type={'password'}
                            required={true}
                            className={inputstyle2}
                            value={pass} onChange={(e) => setPass(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-4 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                          <FormLabel name={'Email de Contacto'} />
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> @ </span>
                            <input
                              type={'text'}
                              required={true}
                              className={inputstyle2}
                              value={emailcontacto} onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <FormLabel name={'Sobre mí'} />
                        <div class="mt-1">
                          <textarea
                            rows="3"
                            class="shadow-sm focus:ring-cyan-700 focus:border-cyan-700 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            value={sobremi} onChange={(e) => setSobremi(e.target.value)}
                          />
                        </div>
                        <p class="mt-2 text-sm text-gray-500"> Aquí puedes compartir tus intereses personales y académicos.</p>
                      </div>
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Guardar Cambios </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};