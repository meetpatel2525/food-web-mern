import "core-js/es/map";
import "core-js/es/set";

import Customer from "./Components/Customer";
import AdminPanel from "./Components/AdminPanel";
import LoginForm from "./Components/AdminComponents/LoginForm";
// import Admin from './Components/Admin';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Customer />
          </Route>
          <Route exact path="/admin">
            {/* //for authontication of admin */}

            {
              // ._id  store the id from the mongodb databaise
              user && user._id ? (
                <AdminPanel setLoginUser={setLoginUser} />
              ) : (
                <LoginForm setLoginUser={setLoginUser} />
              )
            }
          </Route>
          <Route exact path="/login">
            <LoginForm setLoginUser={setLoginUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
