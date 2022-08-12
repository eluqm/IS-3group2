import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";
import { generateHeaderForRequest } from "../utils/utils";
import Caption from "./Caption";



const columnas = [
    {
        name: 'Imágenes',
        grow: 0,
        cell: row => <img height="84px" width="84px" alt={row.name} src={row.posterUrl} />,
      },
  
    {
      selector: 'titulo',
      sortable: true,
      wrap: true,
      grow: 5,
    },
    {
      name: 'Año',
      selector: 'año',
      sortable: true,
    },
    {
      name: 'Disponibilidad',
      selector: 'vacantes',
      sortable: true,
      grow: 1.5,
      wrap: true,
      },
    {
    name: 'Estado',
    selector: 'estado',
    sortable: true
    },
  
    {
      name: 'N° Likes',
      selector: 'id',
      sortable : true,
      grow: 0.01,
    },
    {
          name: 'Like',
          button: true,
          cell: () => <Button>Like</Button>,
      },
  ]




export default function Table() {
  const [vecProj, setVectProj] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      const header = generateHeaderForRequest('token');
      const data = await axios.get('http://localhost:5001/re/3/proj', {
        headers: header
      });
      setVectProj(data.data);
    }
    fetch();
  }, []);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Caption 
          title = {'Tus Proyectos'} 
          descrip = {'Aquí se listan todos tus proyectos'}
        />
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          {columnas.map((item) => (
            <th scope="col" class="py-3 px-6">
              {item.name}
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {vecProj.map((e) => (
            <DataTable
            columns = {columnas}
            data = {tablaDatos}
            pagination
            paginationComponentOptions
            fixedHeader
            fixedHeaderScrollHeight="600px"/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
