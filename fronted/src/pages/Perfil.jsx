import DashNav from "../components/DashNav";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FormLabel from "../components/FormLabel";
import { inputstyle, inputstyle2, buttonSty } from "../utils/styles.utils";
import jwtDecode from "jwt-decode";
import Subtitle from "../components/Subtitle";

export default function Perfil() {
  const data = localStorage.getItem('token');
  const decoded = jwtDecode(data);

  const [namecompleto, setName] = useState('');
  const [pass, setPass] = useState('');
  const [emailcontacto, setEmail] = useState('');
  const [insitucion, setInsti] = useState('');
  const [sobremi, setSobremi] = useState('');

  const [codeOCDR, setCode] = useState('');

  const [areaR, setAR] = useState('');
  const [vecAreas, setVecAreas] = useState([]);

  const history = useHistory();

  const id = decoded.datos.id

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/re/${id}`);
      setName(x.data.namecompleto);
      setPass(x.data.pass);
      setEmail(x.data.emailcontacto);
      setInsti(x.data.insitucion);
      setSobremi(x.data.sobremi);
      setCode(x.data.codigo_orcdir);
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

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/re/area/${id}`);
      setVecAreas(x.data);
    }
    fetch();
  }, [vecAreas]);

  const AddAreaRes = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/re/area', {
        idUser: id, area_res: areaR
      });
      alert('Agregado!');
    } catch (err) {
      alert(`Error al añadir AR: ${areaR}`);
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

                      <div class="grid grid-cols-5 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Código ORCDIR'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle2}
                            value={codeOCDR} onChange={(e) => setCode(e.target.value)}
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

          <br />

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900"> Tus Áreas de Investigación </h3>
                  <p className="mt-1 text-sm text-gray-600"> Aquí puedes listar tus áreas de Investigación.</p>
                </div>
                <br />
                <Subtitle content={'Áreas agregadas'} />
                <div className="flex flex-col flex-wrap">
                  {vecAreas.map((e) => (
                    <dt className="font-medium text-gray-900">{e.area_res}</dt>
                  ))}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={AddAreaRes}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-2">
                      <div className="col-span-6 sm:col-span-4">
                        <FormLabel name={'Nombre del Área'} />
                        <input
                          type={'text'}
                          required={true}
                          className={inputstyle}
                          placeholder={'Series Temporales'}
                          value={areaR} onChange={(e) => setAR(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class={buttonSty} > Añadir Área </button>
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