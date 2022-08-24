import axios from "axios";
import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { type } from "../utils/types.utils";

export default function RowProject({ props }) {
  const { titulo, id, likes, fechaPubli, idP } = props;
  const [res, setRes] = useState(type);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:5001/re/${id}`);
      const { namecompleto, insitucion, emailcontacto, fecharegistro, areaRese, sobremi } = data.data;
      setRes(() => ({
        name: namecompleto,
        inst: insitucion,
        fech: emailcontacto,
        regi: fecharegistro,
        area: areaRese,
        abot: sobremi
      }));
    }
    fetch();
  }, [id]);

  const addLike = async () => {
    try {
      await axios.put(`http://localhost:5001/proj/${idP}`).then(
        () => alert('Like dado!'));
    } catch(err) {
      alert(`Error al dar like a ${idP}`)
    }
  }

  const history = useHistory();

  const getDetail = () => {
    history.push({
      pathname: '/detailed',
      state: { p: props, r: res }
    });
  }

  return (
    <>
      <div className="box-content hover:bg-stone-200  w-5/6 p-5 border-2 border-stone-800 hover:border-stone-900 rounded-lg">
        <div className="flex flex-row justify-between">
          <button onClick={getDetail} > <p className="font-medium text-xl"> {titulo} </p> </button>
          <div className="flex flex-row items-center space-x-1">
             <p className="font-normal text-2xl text-rose-600"> {likes} </p>
            <button onClick={addLike}> <HeartIcon className="h-8 w-8" aria-hidden="true" color="red" /> </button>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <p className="text-stone-600 text-sm" > {res.name} </p>
          <p className="text-stone-600 text-sm" > {res.inst} </p>
          <p className="text-stone-600 text-sm" > {fechaPubli } </p>
        </div>
      </div>
    </>
  );
}