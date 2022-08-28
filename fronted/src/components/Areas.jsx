import { facultades } from "../utils/data.util";

export default function Areas({ setValueSearch }) {
  return (
    <main>
      <div className="h-auto w-auto mx-6 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          {facultades.map((e) => (
            <button onClick={() => setValueSearch(e.id)} className="box-content hover:bg-zinc-300 h-auto w-auto p-5 border-4 border-cyan-800 rounded-lg">
              <p className="font-medium text-lg tracking-tight" > {e.name} </p>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
