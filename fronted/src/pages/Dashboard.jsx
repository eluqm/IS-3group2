import DashNav from "../components/DashNav";

import jwtDecode from "jwt-decode";
import Table from "../components/Table";
import { Hello } from "../components/Hello";

export default function Dashboard() {
  const data = localStorage.getItem('token');
  const decoded = jwtDecode(data);

  return (
    <>
      <DashNav />
      <Hello name= {`Hola, ${decoded.datos.namecompleto}`} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Table id={decoded.datos.id} />
        </div>
      </main>
    </>
  )
};
