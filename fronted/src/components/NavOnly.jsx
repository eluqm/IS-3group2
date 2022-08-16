export default function NavOnly(props) {
  const { name } = props;
  return (
    <div className="min-h-full bg-gray-800">
      <div className="bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-white text-4xl"> {name} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}