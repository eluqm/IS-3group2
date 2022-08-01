import DashNav from "../components/DashNav";

import jwtDecode from "jwt-decode";

export default function AddProject() {
  const data = localStorage.getItem('token');
  const decoded = jwtDecode(data);

  return (
    <>
      <DashNav name={decoded.datos.namecompleto} />
    </>
  )
};
