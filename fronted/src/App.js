import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import Perfil from "./pages/Perfil";
import DetailsProject from "./pages/Details";
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import SignPage from "./pages/SignPage";
import ProjectsPage from "./pages/Projects";
import ProjectDetailed from "./pages/ProjectDetailed";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Index />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/sign'}>
          <SignPage />
        </Route>
        <Route path={'/dash'}>
          <Dashboard />
        </Route>
        <Route path={'/addproj'}>
          <AddProject />
        </Route>
        <Route path={'/perfil'}>
          <Perfil />
        </Route>
        <Route path={'/details'}>
          <DetailsProject />
        </Route>
        <Route path={'/projects'}>
          <ProjectsPage />
        </Route>
        <Route path={'/detailed'}>
          <ProjectDetailed/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
