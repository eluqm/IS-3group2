import NavOnly from "../components/NavOnly";
import { useLocation } from "react-router-dom";
import Researcher from "../components/Researcher";
import RenderProject from "../components/RenderProject";
import { useState } from "react";
import ResearchCard from "../components/ResearchCard";

export default function ProjectDetailed() {
  const location = useLocation();
  const { r, p } = location.state;

  const [openR, setOpenR] = useState(false);

  return (
    <>
      <NavOnly name={'BeResearcher'} />
      <div className="bg-white">
        <div className='flex flex-row'>
          <Researcher
            name={r.name}
            insti={r.inst}
            email={r.fech}
            funSt={setOpenR}
          />
          <div className='w-full flex flex-col'>
            <br/>
            <RenderProject p={p} />
          </div>
        </div>
      </div>
      {openR && <ResearchCard fn={setOpenR} p={r} />}
    </>
  );
}