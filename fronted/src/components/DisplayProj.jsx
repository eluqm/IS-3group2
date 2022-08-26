import React, { useEffect, useState } from "react";
import axios from "axios";
import RowProject from "./RowProject";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function DisplayProj(props) {
  const { id } = props;
  const [vecP, setVecP] = useState([]);

  const [current, setCurrent] = useState(0);

  const paginatVecp = () => {
    return vecP.slice(current, current + 5);
  }

  const nextPage = () => {
    setCurrent(current + 5);
  }

  const previusPage = () => {
    if (current > 0) {
      setCurrent(current - 5);
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:5001/proj/${id}`);
      setVecP(data.data);
    }
    fetch();
  }, [id, vecP]);

  return (
    <div className="space-y-10" >
      <br />
      <div className='flex flex-col items-center tracking-tight space-y-6'>

        <div className="flex flex-row space-x-40 ">
          <div className="flex flex-row  rounded-lg box-content border-4 justify-between  border-zinc-500">
            <button className="p-2 text-lg font-medium"> Todos </button>
            <button className="p-2 text-lg font-medium"> 2022 </button>
            <button className="p-2 text-lg font-medium"> Popular </button>
          </div>

          <div className="flex flex-row  rounded-lg box-content border-4 justify-between  border-zinc-500">
            <button className="p-2 text-lg font-medium"> Filtrar </button>
            <button className="p-2 text-lg font-medium"> Ordenar </button>
          </div>

        </div>

        {paginatVecp().map((e) => (
          <RowProject
            props={e} />
        ))}

        <div className="flex flex-row space-x-5 justify-items-end">
          <button onClick={previusPage} className="rounded-lg box-content p-2 border-2  border-zinc-900"> <ChevronLeftIcon className="h-7 w-20" aria-hidden="true" />  </button>
          <button onClick={nextPage} className="rounded-lg box-content p-2 border-2 border-zinc-900"> <ChevronRightIcon className="h-7 w-20" aria-hidden="true" /> </button>
        </div>
      </div>

    </div>
  );
}