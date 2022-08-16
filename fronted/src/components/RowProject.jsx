import axios from "axios";
import { useEffect, useState } from "react";
import Researcher from "./Researcher";


export default function RowProject(props) {
  const { name, id } = props;
  
  const [namec, setName] = useState('');
  const [insti, setInsti] = useState('');
  const [mail, setMail] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:5001/re/${id}`);
      setName(data.data.namecompleto);
      setInsti(data.data.insitucion);
      setMail(data.data.emailcontacto);
    }
    fetch();
  }, [id]);

  return (
    <>
      <button className="box-content hover:bg-zinc-300 h-32 w-5/6 p-5 border-4 border-zinc-600 hover:border-zinc-800 rounded-lg">
        <p className="font-medium text-lg" > {name} </p>
        <p className="font-medium text-lg" > {namec} </p>
        <p className="font-medium text-lg" > {insti} </p>
        <p className="font-medium text-lg" > {mail} </p>
      </button>
    </>
  );
}