import { PaperClipIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline';

export default function Applicant(props) {
  const {idProAre, titulo, descri, financ, vacant, fechPu, likes} = props;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
        <h3 className="text-lg leading-6 font-medium text-gray-900"> {titulo} </h3>
        <div className="w-0 flex-1 flex items-center"/>
         <p className='h-5 w-5 text-red-500 group-hover:text-cyan-400'>{likes}</p>
        <HeartIcon className="h-5 w-5 text-red-500 group-hover:text-cyan-400" aria-hidden="true"/>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"> Fecha Publicación </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {fechPu} </dd>
          </div>
          <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Financiación</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{financ}</dd>
          </div>
          <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"> Número de Vacantes </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {vacant} </dd>
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Descripcion</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {descri} </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}