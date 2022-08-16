import NavOnly from "../components/NavOnly";
import { useLocation } from "react-router-dom";
import Researcher from "../components/Researcher";
import RenderProject from "../components/RenderProject";

export default function ProjectDetailed() {
  const location = useLocation();
  const { r, p } = location.state;

  return (
    <>
      <NavOnly name={'BeResearcher'} />
      <div className="bg-white">
        <div className='flex flex-row'>
          <Researcher
            name={r.name}
            insti={r.inst}
            email={r.fech}
          />
          <div className='w-full flex flex-col'>
            <br/>
            <RenderProject p={p} />
          </div>
        </div>
      </div>
    </>
  );
}