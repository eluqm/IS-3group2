import axios from "axios";
import { useEffect, useState } from "react";

export default function BecariosById(props) {
  const { id } = props;
  const [vec, setVec] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get(`http://localhost:5001/res/part/${id}`);
      setVec(x.data);
    }
    fetch();
  }, []);

  return (
    <div className="flex flex-row flex-wrap space-x-1 space-y-1">
      {vec.map((e) => (
        <button key={e.id} className="bg-red-800 box-content h-auto w-auto p-2 border-4 border-red-700 rounded-lg">
          <p className="font-medium text-lg text-zinc-50" > {e.participante} </p>
        </button>
      ))}
    </div>
  );
}