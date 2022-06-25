//for simple login

// import React, {useState} from "react"
// import axios from "axios"
// import { useHistory } from "react-router-dom"
// import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
// import { useEffect } from 'react';

// const style2  ={

// 	margin: '5% 0px 00px 15%',

// };

//   const CustomerSignIn = ({setLoginCustomer}) => {

// 	const history = useHistory()

//     const [ customer, setCustomer] = useState({

// 		email:"",
//         password:""
//     })

// 	const handleChange = (e) => {
//         const { name, value } = e.target

// 		setCustomer({
//             ...customer,
//             [name]: value
//         })
//     }

// //logic of logedin admins  cookie  and put it in use effect

// const readCookie = ()=>{

//     const customerr = Cookies.get("customerr");
// //condition of perticuler customer is login than it set
//     if(customerr){
// 		console.log(customerr);
//         setLoginCustomer(JSON.parse(customerr));//we use JSON.parse for covert the string in to object
//  }
// }
// useEffect(() => {
//     //for runn the function at page lode
//     readCookie();
// }, [])

//     const login = (e) => {
// 		//for not send data in url
// 		e.preventDefault();

// 		axios.post("http://localhost:9002/customerlogin", customer)
// 		.then(res => {
//             alert(res.data.message)

// 			setLoginCustomer(res.data.customerlog) // customerlog hold the data of registered user or data of store in backend and databaise
// 			if(res.data.customerlog){
// 			 //set cooki
// 			 Cookies.set("customerr",JSON.stringify(res.data.customerlog))//hear we customerlog JSON.stringify for convert the object in to string

// 			 localStorage.removeItem("productlist");
// 			 localStorage.removeItem("wish");

// 			history.push("/")

// 			window.location.reload();
// 			}
// 		})
//     }

// 	return (
//   <>

// 	<div className="sign-inup">
// 		<div style={style2} className="container">
// 			<div className="row justify-content-center">
// 				<div className="col-lg-5">
// 					<div className="sign-form">
// 						<div className="sign-inner">
// 							<div className="sign-logo" id="logo">
// 								<a href="index.html"><img src="addon/images/logo.svg" alt=""/></a>
// 								<a href="index.html"><img className="logo-inverse" src="addon/images/dark-logo.svg" alt=""/></a>
// 							</div>
// 							<div className="form-dt">
// 								<div className="form-inpts checout-address-step">
// 									<form>
// 										<div className="form-title"><h6>Sign In</h6></div>
// 										<div className="form-group pos_rel">
// 											<input id="phone[number]" name="email" value={customer.email} onChange={handleChange} type="text" placeholder="Enter email" className="form-control lgn_input" required=""/>
// 											<i className="uil uil-mobile-android-alt lgn_icon"></i>
// 										</div>
// 										<div className="form-group pos_rel">
// 											<input id="password1" name="password" value={customer.password}  onChange={handleChange}  type="password" placeholder="Enter Password" className="form-control lgn_input" required=""/>
// 											<i className="uil uil-padlock lgn_icon"></i>
// 										</div>
// 										<button type="submit" className="login-btn hover-btn"  onClick={login}> Sign In Now</button>
// 									</form>
// 								</div>
// 								<div className="password-forgor">
// 									<a href="forgot_password.html">Forgot Password?</a>
// 								</div>
// 								<div className="signup-link">
// 									<p>Don't have an account? - <Link to="/customerregistration">Sign Up Now</Link></p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="copyright-text text-center mt-3">
// 						<i className="uil uil-copyright"></i>Copyright 2020 <b>Gambolthemes</b> . All rights reserved
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>

//     </>
//   )
// }

// export default CustomerSignIn





// merch the local storage data with databise with product filter no product repeat


import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getCart } from "../../Apis/api";
const style2 = {
  margin: "5% 0px 00px 15%",
};

const CustomerSignIn = ({ setLoginCustomer }) => {
  // login customer data
  const customerr = Cookies.get("customerr");

  const history = useHistory();

  const [customer, setCustomer] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  //logic of logedin admins  cookie  and put it in use effect

  const readCookie = () => {
    const customerr = Cookies.get("customerr");
    //condition of perticuler customer is login than it set
    if (customerr) {
      // console.log(customerr);
      setLoginCustomer(JSON.parse(customerr)); //we use JSON.parse for covert the string in to object
    }
  };

  useEffect(() => {
    //for runn the function at page lode
    readCookie();
  }, []);

  //login logic and   murch data of perticuler login user from the cart bakend data

  const login = (e) => {
    //for not send data in url
    e.preventDefault();

    axios.post("http://localhost:9002/customerlogin", customer).then((res) => {
      alert(res.data.message);

      setLoginCustomer(res.data.customerlog); // customerlog hold the data of registered user or data of store in backend and databaise
      if (res.data.customerlog) {
        //set cooki
        Cookies.set("customerr", JSON.stringify(res.data.customerlog)); //hear we customerlog JSON.stringify for convert the object in to string

        const customerr = Cookies.get("customerr");

        // function of murch the data of local storage and databise

        //chek if user is login or not
        if (customerr) {
          var cust = JSON.parse(customerr);

          //get the data of local storage

          let list = window.localStorage.getItem("productlist");

          let data = list == null ? [] : JSON.parse(list);

          //store login user and local storage data ina variable
          const payload = {
            products: data,
            u_id: cust._id,
          };
          //call the api of add product in data bise of perticuler user
          axios.post("http://localhost:9002/cart", payload).then((res) => {
            // alert("add product sussecfuly")
          });
        }

        localStorage.removeItem("productlist");
        // localStorage.removeItem("wish");

        history.push("/");

        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="sign-inup">
        <div style={style2} className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sign-form">
                <div className="sign-inner">
                  <div className="sign-logo" id="logo">
                    <a href="index.html">
                      <img src="addon/images/logo.svg" alt="" />
                    </a>
                    <a href="index.html">
                      <img
                        className="logo-inverse"
                        src="addon/images/dark-logo.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="form-dt">
                    <div className="form-inpts checout-address-step">
                      <form>
                        <div className="form-title">
                          <h6>Sign In</h6>
                        </div>
                        <div className="form-group pos_rel">
                          <input
                            id="phone[number]"
                            name="email"
                            value={customer.email}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter email"
                            className="form-control lgn_input"
                            required=""
                          />
                          <i className="uil uil-mobile-android-alt lgn_icon"></i>
                        </div>
                        <div className="form-group pos_rel">
                          <input
                            id="password1"
                            name="password"
                            value={customer.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter Password"
                            className="form-control lgn_input"
                            required=""
                          />
                          <i className="uil uil-padlock lgn_icon"></i>
                        </div>
                        <button
                          type="submit"
                          className="login-btn hover-btn"
                          onClick={login}
                        >
                          {" "}
                          Sign In Now
                        </button>
                      </form>
                    </div>
                    <div className="password-forgor">
                      <a href="forgot_password.html">Forgot Password?</a>
                    </div>
                    <div className="signup-link">
                      <p>
                        Don't have an account? -{" "}
                        <Link to="/customerregistration">Sign Up Now</Link>
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
    </>
  );
};

export default CustomerSignIn;
