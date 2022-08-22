import React, { useEffect, useState } from "react";
import axios from "axios";
import RowProject from "./RowProject";

export default function DisplayProj(props) {
  const { id } = props;
  const [vecP, setVecP] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:5001/proj/${id}`);
      setVecP(data.data);
    }
    fetch();
  }, [id, vecP]);

  return (
    <div className='grid flex-col space-y-6 justify-items-center tracking-tight'>
      <div className="font-bold text-slate-900 text-6xl mx-20">  Proyectos  </div> &nbsp;
      {vecP.map((e) => (
        <RowProject
          props={e}/>
      ))}
    </div>
  );
}