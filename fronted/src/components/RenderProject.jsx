import RowRender from "./RowRender";
import LabelsById from "./Labels";
import BecariosById from "./Becarios";
import { HeartIcon } from "@heroicons/react/outline";
import FooterProject from "./FootProject";
import SchoolsById from "./SchoolsById";

export default function RenderProject({ p }) {
  const { titulo, antecedentes, descripcion, fechaPubli, idP, vacantes, likes, fechaInit, fechaFin, financiacion } = p;

  return (
    <div className="box-content bg-stone-200 h-full w-5/6 p-5 border-2 border-dashed border-stone-800 hover:border-stone-900 rounded-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <RowRender tit={'Título'} content={titulo} font={'semibold'} text={'4xl'} />
          <div className="flex flex-col items-center space-x-1">
            <HeartIcon className="h-8 w-8" aria-hidden="true" color="red" />
            <p className="font-normal text-2xl text-rose-600"> {likes} </p> 
          </div>
        </div>
        <RowRender tit={'Antescedentes'} content={antecedentes} font={'normal'} text={'xl'} />
        <RowRender tit={'Descripción'} content={descripcion} font={'normal'} text={'xl'} />
        <RowRender tit={'Publicación'} content={fechaPubli} font={'normal'} text={'xl'} />
        <RowRender tit={'Vacantes'} content={vacantes} font={'normal'} text={'xl'} />
      </div>
      <br />
      <div className="flex flex-row">
        <div className="h-full w-1/2">
          <p className="font-semibold text-4xl"> Áreas </p>
          <LabelsById id={idP} />
        </div>
        <div className="h-full w-1/2">
          <p className="font-semibold text-4xl"> Becarios </p>
          <BecariosById id={idP} />
        </div>
      </div>
      <br/>
      <p className="font-semibold text-4xl"> Escuelas </p>
      <SchoolsById id={idP} />
      <br/>
      <div className="flex flex-row justify-between items-center">
        <FooterProject title={'Financiación'} content={financiacion} />
        <FooterProject title={'Inicio'} content={fechaInit} />
        <FooterProject title={'Cierre'} content={fechaFin} />
      </div>
    </div>
  );
}
