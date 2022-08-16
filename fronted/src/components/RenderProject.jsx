import RowRender from "./RowRender";

export default function RenderProject({ p }) {
  const { titulo, antecedentes, descripcion, fechaPubli } = p;
  return (
    <div className="box-content hover:bg-stone-200 h-full w-5/6 p-5 border-2 border-stone-800 hover:border-stone-900 rounded-lg">
      <div className="flex flex-col space-y-4">
        <RowRender tit={'Título'} content={titulo} font={'semibold'} text={'4xl'} />
        <RowRender tit={'Antescedentes'} content={antecedentes} font={'normal'} text={'xl'} />
        <RowRender tit={'Descripción'} content={descripcion} font={'normal'} text={'xl'} />
        <RowRender tit={'Publicación'} content={fechaPubli} font={'normal'} text={'xl'} />
      </div>
      <br/>
      <div className="flex flex-row">
        <div className="h-full w-1/2">
          <p className="font-semibold text-4xl"> Areas </p>
          
        </div>

        <div className="h-full w-1/2">
          <p className="font-semibold text-4xl"> Becarios </p>
        </div>
      </div>

    </div>
  );
}
