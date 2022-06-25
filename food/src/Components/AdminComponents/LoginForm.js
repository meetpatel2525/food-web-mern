import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
// import {Link} from "react-router-dom";

const LoginForm = ({ setLoginUser }) => {
  const history = useHistory();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  //save data admin enter for login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  //logic of logedin admins  cookie  and put it in use effect

  const readCookie = () => {
    const userr = Cookies.get("userr");

    //condition of perticuler user is login than it set
    if (userr) {
      setLoginUser(JSON.parse(userr)); //we use JSON.parse for covert the string in to object
    }
  };

  useEffect(() => {
    //for runn the function at page lode
    readCookie();
  }, []);

  const login = () => {
    //react login api call
    axios.post("http://localhost:9002/login", admin).then((res) => {
      //for alert
      alert(res.data.message);
      //set the data of login user in this
      console.log(res.data.logg);
      setLoginUser(res.data.logg); //logg hold the data of registered user or data of store in backend and databaise

      if (res.data.logg) {
        //set cooki
        Cookies.set("userr", JSON.stringify(res.data.logg)); //hear we logg JSON.stringify for convert the object in to string

        history.push("/admin");
        window.location.reload();
      }
    });
  };
  return (
    <>
      <form>
        <div className="bg-sign">
          <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-5">
                      <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header card-sign-header">
                          <h3 className="text-center font-weight-light my-4">
                            Login
                          </h3>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              <label
                                className="form-label"
                                for="inputEmailAddress"
                              >
                                Email*
                              </label>
                              <input
                                className="form-control py-3"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Enter email address"
                                name="email"
                                value={admin.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label" for="inputPassword">
                                Password*
                              </label>
                              <input
                                className="form-control py-3"
                                id="inputPassword"
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={admin.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="rememberPasswordCheck"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  for="rememberPasswordCheck"
                                >
                                  Remember password
                                </label>
                              </div>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                              <button
                                onClick={login}
                                type="button"
                                className="btn btn-sign hover-btn"
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
