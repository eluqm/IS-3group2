export default function Researcher(props) {
  const { name, insti, email } = props;
  return (
    <main>
      <div className="max-w-7xl mx-6 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          <div className="box-content hover:bg-zinc-200 h-auto w-64 p-5 border-4 border-black rounded-lg">
            <p className="font-medium text-2xl" > {name} </p>
            <p className="font-light text-lg" > {insti} </p>
            <p className="font-light text-lg" > @ {email} </p>
          </div>  
        </div>
      </div>
    </main>
  );
}
