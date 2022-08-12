import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login';

import Features from "./components/Features";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import Card from "./components/Card";
import Test_Component from "./pages/Testing";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <Header />
          <Features />
          <Card />
          <Footer />
        </Route>

        <Route path={'/login'}>
          <Nav />
          <Login />
        </Route>

        <Route path={'/sign'}>
          <Nav />
          <Sign />
          <Footer />
        </Route>

        <Route path={'/dash'}>
          <Dashboard />
        </Route>

        <Route path={'/addproj'}>
          <AddProject />
        </Route>

        <Route path={'/test'}>
          <Test_Component />
        </Route>

        <Route path={'/perfil'}>
          <Perfil />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
