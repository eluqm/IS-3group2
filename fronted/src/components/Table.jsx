import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";
import { generateHeaderForRequest } from "../utils/utils";
import Caption from "./Caption";
import { navigation } from "../utils/data.util";

export default function Table(props) {
  const { id } = props;
  const [vecProj, setVectProj] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const header = generateHeaderForRequest('token');
      const data = await axios.get(`http://localhost:5001/re/${id}/proj`, {
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
          {navigation.map((item) => (
            <th scope="col" class="py-3 px-6">
              {item.name}
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {vecProj.map((e) => (
            <Row
              idProAre={e.idP}
              titulo={e.titulo}
              descri={e.descripcion}
              financ={e.financiacion}
              vacant={e.vacantes}
              fechPu={e.fechaPubli}
              likes={e.likes} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
