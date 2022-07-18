import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";

/*
*  The Main Function for React Application
* */

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Login/>
        </Route>
        <Route path={"/register"}>
          <Register/>
        </Route>
        <Route path={"/dashboard"}>
          <Navbar/>
          <Dashboard/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
