import { useState } from 'react';
import Areas from './Areas';
import { facultades } from '../utils/data.util';
import DisplayProj from './DisplayProj';
import NavOnly from './NavOnly';

export default function Testing() {
  const [searchid, setSearch] = useState(1);

  const [current, setCurrent] = useState(0);
  const filterProjects = () => {
    return facultades.slice(current, current + 5);
  }

  const nextPage = () => {
    setCurrent(current + 5);
  }

  const previusPage = () => {
    if (current > 0)
      setCurrent(current - 5);
  }

  return (
    <>
      <NavOnly name={'BeResearcher'} />
      <div className="bg-white ">
        <div className='flex flex-row'>
          <Areas setValueSearch={setSearch} />
          <div className='w-full flex flex-col'>
            <DisplayProj id={searchid}/>
          </div>
        </div>
      </div>
    </>
  )
}