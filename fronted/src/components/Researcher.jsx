export default function Researcher(props) {
  const { name, insti, email, funSt } = props;
  return (
    <main>
      <div className=" mx-6 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          <div className="h-auto w-auto border-4 border-indigo-500 rounded-lg tracking-tight">
            <div className="bg-indigo-600">
              <p className="font-medium text-2xl text-white p-4 capitalize" > {name} </p>
            </div>
            <div className="p-4 space-y-2 ">
              <p className="font-semibold text-lg "  > {insti} </p>
              <div className="border-neutral-700 border-2 p-3 rounded-lg">
                <p className="" > {`@${email}`} </p>
              </div>
              <button onClick={() => funSt(true)} className=" w-full border-neutral-700 border-2 p-3 rounded-lg font-semibold text-gray-50 bg-neutral-600"> Saber más  </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
