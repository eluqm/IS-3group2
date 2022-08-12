import DashNav from "../components/DashNav";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Label from "../components/Label";
import Subtitle from "../components/Subtitle";
import { generateDateToday, formatDate } from "../utils/utils";
import { useHistory } from "react-router-dom";

const divclas = "relative z-0 mb-7 w-full group";
const int = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-cyan-700 focus:outline-none focus:ring-0 focus:border-cyan-800 peer";

export default function AddProject() {
  const data = localStorage.getItem('token');
  const decoded = jwtDecode(data);

  const idF = 2;
  const id = decoded.datos.id;

  const [titulo, setTitulo] = useState('xGA: ...');
  const [antecedentes, setAntec] = useState('My Gzu :v');
  const [descripcion, setDescr] = useState('Gaa chupetín chamba es chamba');
  const [financiacion, setFinan] = useState(9000);
  const [vacantes, setVac] = useState(6);
  
  const todayDate = new Date(); 
  const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
  const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}`: todayDate.getMonth();
  const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
  
  const [fechaInit, setInit] = useState(formattedDate);
  const [fechaFin, setFin] = useState(formattedDate);

  const history = useHistory();
  
  const AddProject = async (e) => {
    e.preventDefault();
    const fechaPubli = generateDateToday();

    try {
      await axios.post('http://localhost:5001/res/addproj', {
        id, titulo, antecedentes, descripcion, idF, financiacion, fechaPubli, fechaInit, fechaFin, vacantes  
      }).then(() => alert(`Proyecto ${titulo} creado!`)).catch(
        (err) => console.log(`error! ${err}`)
      );
      history.push('/dash')
    } catch (err) {
      if (err.response) {
        alert(`Error al registrar ${titulo}`);
      }
    }
  }

  return (
    <>
      <DashNav name={decoded.datos.namecompleto} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Subtitle content={'Agregando un Proyecto Nuevo: '} />
          <br />

          <form onSubmit={AddProject}>
            <div className={divclas}>
              <input
                type={'text'}
                required={true}
                value={titulo} onChange={(e) => setTitulo(e.target.value)}
                className={int} />
              <Label name={'Título'} />
            </div>

            <div className={divclas}>
              <input
                type={'text'}
                required={true}
                value={antecedentes} onChange={(e) => setAntec(e.target.value)}
                className={int} />
              <Label name={'Antecedentes'} />
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div className={divclas}>
                <input
                  type={'text'}
                  required={true}
                  value={descripcion} onChange={(e) => setDescr(e.target.value)}
                  className={int} />
                <Label name={'Descripcion'} />
              </div>
              <div className={divclas}>
                <input
                  type={'number'}
                  required={true}
                  value={financiacion} onChange={(e) => setFinan(e.target.value)}
                  className={int} />
                <Label name={'Financiación'} />
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div className={divclas}>
                <input
                  type={'date'}
                  required={true}
                  value={fechaInit} onChange={(e) => setInit(e.target.value)}
                  className={int}/>
                <Label name={'Fecha de inicio'} />
              </div>
              <div className={divclas}>
                <input
                  type={'date'}
                  required={true}
                  value={fechaFin} onChange={(e) => setFin(e.target.value)}
                  className={int} />
                <Label name={'Fecha de Finalización'} />
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div className={divclas}>
                <input
                  type={'number'}
                  required={true}
                  value={vacantes} onChange={(e) => setVac(e.target.value)}
                  className={int} />
                <Label name={'Número de Vacantes'} />
              </div>
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:focus:ring-cyan-900"> Generar Préstamo </button>
          </form>
        </div>
      </main>
    </>
  )
};
