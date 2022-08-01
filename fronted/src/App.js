import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './components/Login';

import Features from "./components/Features";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import FrecuentAsk from "./components/FrecuentAsk";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Header/>
          <Features/>
          <FrecuentAsk/>
          <Footer/>
        </Route>
        <Route path={'/login'}>
          <Nav/>
          <Login/>
          <Footer/>
        </Route>
        <Route path={'/sign'}>
          <Nav/>
          <Sign/>
          <Footer/>
        </Route>
        <Route path={'/dash'}>
          <Dashboard/>
        </Route>
        <Route path={'/newproj'}>
         <AddProject/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
