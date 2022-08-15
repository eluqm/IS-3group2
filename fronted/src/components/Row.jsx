import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Row(props) {
  const { idProAre, titulo, descri, financ, vacant, fechPu, likes } = props;

  const Delete = async (e) => {
    axios.delete(`http://localhost:5001/re/${e}`).then(() => alert(`Proyecto ${e} eliminado`));
  }

  const history = useHistory();
  
  function GetDetails(idP) {
    history.push({
      pathname: '/details',
      state: { id: idP }
    });
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {titulo}
      </th>
      <td class="py-4 px-6"> {fechPu} </td>
      <td class="py-4 px-6"> {financ} </td>
      <td class="py-4 px-6"> {vacant} </td>
      <td class="py-4 px-6"> {descri} </td>
      <td class="py-4 px-6"> {likes} </td>
      <td class="py-4 px-6">
        <div className="flex flex-row space-x-1">
          <button class="font-medium text-blue-600 dark:text-red-500 hover:underline" onClick={() => { Delete(idProAre) }} > Delete </button>
          <button class="font-medium text-blue-600 dark:text-green-500 hover:underline" onClick={() => { GetDetails(idProAre) }} > Detalles </button>
        </div>
      </td>
    </tr>
  );
}
