import axios from "axios";
import { useEffect, useState } from "react";

export default function ResearchCard(props) {
  const [vecAreas, setVecAreas] = useState([]);

  const { fn, p, id } = props;
  const { name, inst, fech, regi, abot, ocdr } = p;

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/re/area/${id}`);
      setVecAreas(x.data);
    }
    fetch();
  }, []);

  return (
    <div class="animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 ">
      <div class="flex flex-col w-auto h-auto p-10 bg-cyan-800 rounded-lg  ">
        <div className="flex flex-col justify-center space-y-2">
          <div className="p-4 text-white text-4xl font-semibold tracking-tight"> {name} </div>
          <div>
            <p className="font-medium text-slate-300"> Institución </p> 
            <p className="font-semibold text-amber-400 text-xl"> {inst} </p>
            <p className="font-medium text-slate-300"> Email Contacto </p>
            <p className="font-semibold text-amber-400 text-xl"> {fech} </p>
            <p className="font-medium text-slate-300"> Fecha de Registro </p>
            <p className="font-semibold text-amber-400 text-xl"> {regi} </p>

            <p className="font-medium text-slate-300"> Areas de Investigación </p>
            <di className="flex flex-row space-x-2">
              {vecAreas.map((e) => (
                <button key={e.id} className="font-semibold bg-slate-900 p-2 text-neutral-200 text-xl rounded-lg"> {e.area_res} </button>
              ))}
            </di>

            <p className="font-medium text-slate-300"> CÓDIGO ORCDIR </p>
            {ocdr && <button className="bg-slate-900 font-medium text-amber-400 text-2xl p-3 rounded-xl"> {ocdr} </button>}
            
            <p className="font-medium text-slate-300"> Sobre el Investigador </p>
            <p className="font-medium text-amber-400 text-lg"> {abot} </p>
          </div>
          <button onClick={() => fn(false)} className=" w-full border-orange-700 border-2 p-3 rounded-lg font-semibold text-rose-50 bg-orange-600"> Cerrar  </button>
        </div>
      </div>
    </div>
  );
}