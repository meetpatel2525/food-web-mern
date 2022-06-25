import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const style = {
  margin: "5% 0px 00px 15%",
};

const CustomerSignup = () => {
  const history = useHistory();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    //store input value
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const register = (e) => {
    //for not send form details in url
    e.preventDefault();

    // form validations

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // 	//for number

    const pattern = new RegExp(/^[0-9\b]+$/);

    const { name, email, number, password, reEnterPassword } = customer;

    //validation conditions for registration new user

    if (name && email && number && password) {
      if (password === reEnterPassword) {
        if (pattern.test(number) && number.length === 10) {
          if (regex.test(email)) {
            if (password.length >= 4 && password.length <= 10) {
              //api calling to server
              axios
                .post("http://localhost:9002/customerregister", customer)
                .then((res) => {
                  console.log(res.data.message);
                  alert(res.data.message);
                  history.push("/customerlogin");
                });
            } else {
              alert("Password must be Between 4 to 10 characters");
            }
          } else {
            alert("Email is not valid !");
          }
        } else {
          alert("Number  is not valid!");
        }
      } else {
        alert("password and Reenter Password mustbe same ");
      }
    } else {
      alert(" Must be Fullfill all Filds ");
    }
  };

  //validation function and conditions and logics

  //   const validate = (values) => {

  // 	const errors = {};
  // 	//for email
  // 	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // 	//for number
  //     const  pattern = new RegExp(/^[0-9\b]+$/);

  // 	if (!pattern.test(values.number))  {
  // 	  errors.number = "Usernumber  is not valid!";
  // 	}else if((values.number).length != 10){
  // 		errors.number = "Usernumber  is not valid!";
  // 	}
  // 	if (!values.email) {
  // 	  errors.email = "Email is required!";
  // 	} else if (!regex.test(values.email)) {
  // 	  errors.email = "This is not a valid email format!";
  // 	}
  // 	if (!values.password) {
  // 	  errors.password = "Password is required";
  // 	} else if (values.password.length < 4) {
  // 	  errors.password = "Password must be more than 4 characters";
  // 	} else if (values.password.length > 10) {
  // 	  errors.password = "Password cannot exceed more than 10 characters";
  // 	}
  // 	return errors;
  //   };
  
  return (
    <>
      <form>
        <div className="sign-inup">
          <div style={style} className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="sign-form">
                  <div className="sign-inner">
                    <div className="sign-logo" id="logo">
                      <a href="index.html">
                        <img src="adminnn/images/logo.svg" alt="" />
                      </a>
                      <a href="index.html">
                        <img
                          className="logo-inverse"
                          src="adminnn/images/dark-logo.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="form-dt">
                      <div className="form-inpts checout-address-step">
                        <form>
                          <div className="form-title">
                            <h6>Sign Up</h6>
                          </div>
                          <div className="form-group pos_rel">
                            <input
                              id="full[name]"
                              type="text"
                              name="name"
                              value={customer.name}
                              placeholder="Full name"
                              className="form-control lgn_input"
                              required=""
                              onChange={handleChange}
                            />
                            <i className="uil uil-user-circle lgn_icon"></i>
                          </div>
                          <div className="form-group pos_rel">
                            <input
                              id="email[address]"
                              name="email"
                              value={customer.email}
                              type="email"
                              placeholder="Email Address"
                              className="form-control lgn_input"
                              required=""
                              onChange={handleChange}
                            />

                            <i className="uil uil-envelope lgn_icon"></i>
                          </div>
                          <div className="form-group pos_rel">
                            <input
                              id="phone[number]"
                              name="number"
                              value={customer.number}
                              type="text"
                              placeholder="Phone Number"
                              className="form-control lgn_input"
                              required=""
                              onChange={handleChange}
                            />
                            <i className="uil uil-mobile-android-alt lgn_icon"></i>
                          </div>
                          <div className="form-group pos_rel">
                            <input
                              id="password1"
                              type="password"
                              name="password"
                              value={customer.password}
                              placeholder="New Password"
                              className="form-control lgn_input"
                              required=""
                              onChange={handleChange}
                            />
                            <i className="uil uil-padlock lgn_icon"></i>
                          </div>
                          <div className="form-group pos_rel">
                            <input
                              id="password1"
                              type="password"
                              name="reEnterPassword"
                              value={customer.reEnterPassword}
                              placeholder="ReEnter Password"
                              className="form-control lgn_input"
                              required=""
                              onChange={handleChange}
                            />
                            <i className="uil uil-padlock lgn_icon"></i>
                          </div>
                          <button
                            type="submit"
                            className="login-btn hover-btn"
                            onClick={register}
                          >
                            Sign Up Now
                          </button>
                        </form>
                      </div>
                      <div className="signup-link">
                        <p>
                          I have an account? -{" "}
                          <Link to="/customerlogin">Sign In Now</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copyright-text text-center mt-3">
                  <i className="uil uil-copyright"></i>Copyright 2020{" "}
                  <b>Gambolthemes</b> . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CustomerSignup;
