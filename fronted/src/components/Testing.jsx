import { useState } from 'react';
import Areas from './Areas';
import { facultades } from '../utils/data.util';
import DisplayProj from './DisplayProj';
import NavOnly from './NavOnly';

export default function Testing() {
  const [searchid, setSearch] = useState(1);

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