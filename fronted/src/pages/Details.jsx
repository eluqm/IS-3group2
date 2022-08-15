import DashNav from "../components/DashNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import getDateType from "../utils/types.utils";
import { Hello } from "../components/Hello";
import { useEffect } from "react";
import { inputstyle, inputstyle2 } from "../utils/styles.utils";
import FormLabel from "../components/FormLabel";
import { buttonSty } from "../utils/styles.utils";
import Subtitle from "../components/Subtitle";

export default function DetailsProject() {
  const location = useLocation();
  const id = location.state.id;

  const [titulo, setTitulo] = useState('');
  const [antecedentes, setAntec] = useState('');
  const [descripcion, setDescr] = useState('');
  const [financiacion, setFinan] = useState(0);
  const [vacantes, setVac] = useState(0);
  const [fechaInit, setInit] = useState(getDateType());
  const [fechaFin, setFin] = useState(getDateType());

  const [vecLabels, setVec] = useState([]);
  const [label, setLabel] = useState('');

  const [vecVecBec, setVecBec] = useState([]);
  const [becario, setBecario] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/res/${id}`);
      setTitulo(x.data.titulo);
      setAntec(x.data.antecedentes);
      setDescr(x.data.descripcion);
      setFinan(x.data.financiacion);
      setVac(x.data.vacantes);
      setInit(x.data.fechaInit);
      setFin(x.data.fechaFin);
    }
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/res/lab/${id}`);
      setVec(x.data);
    }
    fetch();
  }, [vecLabels]);

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/res/part/${id}`);
      setVecBec(x.data);
    }
    fetch();
  }, [vecVecBec]);

  const updateProject = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/res/${id}`, {
        titulo, antecedentes, descripcion, financiacion, vacantes, fechaInit, fechaFin
      }).then(() => alert('Proyecto Actualizado!')).catch(
        (err) => console.log(`error en ${err}`));
    } catch (err) {
      alert('Error al actualizar Proyecto!');
      console.log(`error en ${err}`);
    }
  }

  const addLabel = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/res/projLab', {
        idP: id, area: label
      }).then(() => alert(`Etiqueta ${label} Guardadaa!`)).catch(
        (err) => console.log(`error en ${err}`));
      setLabel('');
    } catch (err) {
      alert(`Error al guardar ${label}`);
      setLabel('');
    }
  }

  const addParticipant = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/res/part', {
        idP: id, participante: becario
      }).then(() => alert(`${becario} Guardado!`)).catch(
        (err) => console.log(`error en ${err}`));
      setBecario('');
    } catch (err) {
      alert(`Error al agregar ${becario}`);
      setBecario('');
    }
  }

  return (
    <>
      <DashNav />
      <Hello name={titulo} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900"> Mi Proyecto </h3>
                  <p class="mt-1 text-sm text-gray-600"> Aquí puedes guardar Visualizar y Editar Tu proyecto. </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={updateProject}>
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-7 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <FormLabel name={'Título'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle}
                            value={titulo} onChange={(e) => setTitulo(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-7 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <FormLabel name={'Antecedentes'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle}
                            value={antecedentes} onChange={(e) => setAntec(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-4 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <FormLabel name={'Descripción'} />
                          <input
                            type={'text'}
                            required={true}
                            className={inputstyle}
                            value={descripcion} onChange={(e) => setDescr(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-5 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Financiación'} />
                          <input
                            type={'number'}
                            required={true}
                            className={inputstyle2}
                            value={financiacion} onChange={(e) => setFinan(e.target.value)}
                          />
                        </div>
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Vacantes'} />
                          <input
                            type={'number'}
                            required={true}
                            className={inputstyle2}
                            value={vacantes} onChange={(e) => setVac(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-5 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Fecha de Inicio'} />
                          <input
                            type={'date'}
                            required={true}
                            className={inputstyle2}
                            value={fechaInit} onChange={(e) => setInit(e.target.value)}
                          />
                        </div>
                        <div className="col-span-3 sm:col-span-2">
                          <FormLabel name={'Fecha de Finalización'} />
                          <input
                            type={'date'}
                            required={true}
                            className={inputstyle2}
                            value={fechaFin} onChange={(e) => setFin(e.target.value)}
                          />
                        </div>
                      </div>

                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class={buttonSty} > Guardar Cambios </button>
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
                  <h3 className="text-lg font-medium leading-6 text-gray-900"> Palabras Clave del Proyecto </h3>
                  <p className="mt-1 text-sm text-gray-600"> Añade palabras que identifiquen tu Investigación. Puedes usar: Machine Learning, Geopolítica, SVM, Optimización, etc.</p>
                </div>

                <br />
                <Subtitle content={'Etiquetas asociadas'} />

                <div className="flex flex-col flex-wrap">
                  {vecLabels.map((feature) => (
                    <dt className="font-medium text-gray-900">{feature.area}</dt>
                  ))}
                </div>

              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={addLabel}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-2">

                      <div className="col-span-6 sm:col-span-4">
                        <FormLabel name={'Nombre de la Etiqueta'} />
                        <input
                          type={'text'}
                          required={true}
                          className={inputstyle}
                          placeholder={'Machine Learning'}
                          value={label} onChange={(e) => setLabel(e.target.value)}
                        />
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class={buttonSty} > Guardar Etiqueta </button>
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
                  <h3 className="text-lg font-medium leading-6 text-gray-900"> Estudiante Aceptados para el Proyecto </h3>
                  <p className="mt-1 text-sm text-gray-600"> Si aceptaste algún becario para el proyecto, anotalo aquí. Ten actualizado esto para que las personas sepan si aún hay pueden postularse.</p>
                </div>

                <br />
                <Subtitle content={'Nombres de Becarios'} />

                <div className="flex flex-col flex-wrap">
                  {vecVecBec.map((feature) => (
                    <dt className="font-medium text-gray-900">{feature.participante}</dt>
                  ))}
                </div>

              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={addParticipant}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-2">

                      <div className="col-span-6 sm:col-span-4">
                        <FormLabel name={'Nombre del Becario'} />
                        <input
                          type={'text'}
                          required={true}
                          className={inputstyle}
                          placeholder={'Eduardo Valdivia Quispe'}
                          value={becario} onChange={(e) => setBecario(e.target.value)}
                        />
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class={buttonSty} > Guardar Etiqueta </button>
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