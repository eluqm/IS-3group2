import { useEffect, useState } from "react";
import axios from "axios";

export default function SchoolsById(props) {
  const { id } = props;
  const [vecSchools, seteVectSch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/schools/${id}`);
      seteVectSch(x.data);
    }
    fetch();
  }, [])

  return (
    <div className="flex flex-row flex-wrap space-x-1 space-y-1">
      {vecSchools.map((e) => (
        <button key={e.id} className="bg-rose-800 box-content  h-auto w-auto p-2 border-4 border-rose-700 rounded-lg">
          <p className="font-medium text-lg text-zinc-50" > {e.nameescuela} </p>
        </button>
      ))}
    </div>
  );
}