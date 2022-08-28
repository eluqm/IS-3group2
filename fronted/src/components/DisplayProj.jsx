import React, { useEffect, useState } from "react";
import axios from "axios";
import RowProject from "./RowProject";
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";

export default function DisplayProj(props) {
  const { id } = props;
  const [vecP, setVecP] = useState([]);
  
  const [sort, setSort] = useState(true);

  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState('');

  const paginatVecp = () => {
    if (search.length === 0) {
      if (sort) {
        vecP.sort(function (a, b) {
          return a.likes - b.likes;
        });
      }
      return vecP.slice(current, current + 5);
    }
    const filtered = vecP.filter(proj => proj.titulo.includes(search));
    return filtered.slice(current, current + 5);
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

  const switcht = () => {
    if (sort) 
      setSort(false);
    else
      setSort(true);
  }

  return (
    <div className="space-y-10" >
      <br />
      <div className='flex flex-col items-center tracking-tight space-y-6'>
        <div className="flex flex-row space-x-40 ">
          
          <div className="flex flex-row  rounded-lg box-content border-2 justify-between  border-zinc-900">
            <button className="p-2 text-lg border-zinc-900"> Filtrar </button>
            <input
              type={'text'}
              value={search} onChange={(e) => setSearch(e.target.value)}
              className={'border-zinc-900 p-2'}
            />
          </div>

          <div className="flex flex-row rounded-lg p-2 border-2  border-zinc-900 items-center space-x-1">
            <HeartIcon ChevronLeftIcon className="h-7 w-7" aria-hidden="true" color="red"/>
            <button onClick={switcht}> Ordenar </button>
            {sort ? <ArrowDownIcon ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
            : <ArrowUpIcon ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>} 
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