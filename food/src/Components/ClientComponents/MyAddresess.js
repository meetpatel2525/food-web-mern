import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addressofcust } from "../../Apis/api";
import { getAdress, deleteadrs } from "../../Apis/api";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import { useState } from "react";

  // login customer data
//   const customerr = Cookies.get("customerr");
 
// var cust = JSON.parse(customerr);


const initialValue = {
  u_id: "",

  dplace: "",
  name: "",
  phone: "",
  flatno: "",
  address: "",
  pincode: "",
  city: "",
  payment: "",
};

//for add new addres from the data baise

const newaddress = {
  margin: "10px 20px 00px 4px",

  textDecoration: "none",
};

const MyAddresess = () => {
  // add address

  const [myDetails, setMyDetails] = useState(initialValue);

  // const [selectFile, setSelectFile] = useState(ass);

  const {
    u_id,
    odrdata,
    dplace,
    name,
    totalprice,
    delevrycharge,
    phone,
    flatno,
    address,
    pincode,
    city,

    payment,
  } = myDetails;

  const history = useHistory();

  // login customer data
  // const customerr = Cookies.get("customerr");

  const onValueChange = (e) => {
    //convert cookie data in to object for use
    let cust = JSON.parse(customerr);

    //copy the data of local storage and cookie  in a state myDetails and also copy the data of user enter in the form
    setMyDetails({
      ...myDetails,
      u_id: cust._id,
      [e.target.name]: e.target.value,
    });
  };

  const saveAddresh = async (e) => {
    //for not send data in url
    e.preventDefault();

    const datas = {
      u_id,
      u_address: { address, city, flatno, name, phone, pincode },
    };

    // console.log(datas);
    await addressofcust(datas);
    window.location.reload();
    // history.push('/processtoplaceorder');
  };

  // login customer data
  const customerr = Cookies.get("customerr");

  //variable for displayy all data
  const [alladress, setAlladress] = useState([]);

  useEffect(() => {
    getAlladress();
  }, []);

  // get adress of user

  const getAlladress = async () => {
    var cust = JSON.parse(customerr);

    let response = await getAdress(cust._id);

    setAlladress(response.data);
  };

  console.log(alladress);

  // delete the adress

  const deleteAddress = async (id) => {
    await deleteadrs(id);
    console.log(id);
    getAdress();
    window.location.reload(false);
  };

  return (
    <div>
      {/* <!-- Body Start --> */}

      {/* <!-- Add Address Model Start--> */}

      <div
        id="address_model"
        class="header-cate-model main-gambo-model modal fade"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div class="modal-dialog category-area" role="document">
          <div class="category-area-inner">
            <div class="modal-header">
              <button
                type="button"
                class="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i class="uil uil-multiply"></i>
              </button>
            </div>
            <div class="category-model-content modal-content">
              <div class="cate-header">
                <h4>Add New Address</h4>
              </div>

              <div class="add-address-form">
                <div class="checout-address-step">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="">
                        <div class="address-fieldset">
                          <div class="row">
                            <div class="col-lg-6 col-md-12">
                              <div class="form-group">
                                <label class="control-label">Name*</label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={name}
                                  placeholder="Name"
                                  class="form-control input-md"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                              <div class="form-group">
                                <label class="control-label">Phone No*</label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  id="email1"
                                  name="phone"
                                  value={phone}
                                  type="number"
                                  placeholder="Phone No"
                                  class="form-control input-md"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <label class="control-label">
                                  Flat / House / Office No.*
                                </label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  id="flat"
                                  name="flatno"
                                  value={flatno}
                                  type="number"
                                  placeholder="Address"
                                  class="form-control input-md"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <label class="control-label">
                                  Street / Society / Office Name*
                                </label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  id="street"
                                  name="address"
                                  value={address}
                                  type="text"
                                  placeholder="Street Address"
                                  class="form-control input-md"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                              <div class="form-group">
                                <label class="control-label">Pincode*</label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  id="pincode"
                                  name="pincode"
                                  value={pincode}
                                  type="number"
                                  placeholder="Pincode"
                                  class="form-control input-md"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                              <div class="form-group">
                                <label class="control-label">Locality*</label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  id="Locality"
                                  name="city"
                                  value={city}
                                  type="text"
                                  placeholder="Enter City"
                                  class="form-control input-md"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <div class="address-btns">
                                  <b></b>
                                  {/* onClick={(e) =>saveAddresh(e)} */}
                                  <button
                                    type="submit"
                                    onClick={(e) => saveAddresh(e)}
                                    class="save-btn14 hover-btn"
                                  >
                                    Save
                                  </button>

                                  {/* <Link to="/processtoplaceorder" class="collapsed ml-auto next-btn16 hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseThree"> Next </Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add Address Model End--> */}

      <div class="wrapper">
        <div class="gambo-Breadcrumb">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      User Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard-group">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="user-dt">
                  <div class="user-img">
                    {/* <img src="addon/images/avatar/img-5.jpg" alt="" /> */}
                    {/* <div class="img-add">
                      <input type="file" id="file" />
                      <label for="file">
                        <i class="uil uil-camera-plus"></i>
                      </label>
                    </div> */}
                  </div>
                  {/* <h4> {cust ? cust.name :null  }  </h4> */}
                  <p>
                    {/* +91 {cust ? cust.number :null  }  */}
                    <a href="#">
                      {/* <i class="uil uil-edit"></i> */}
                    </a>
                  </p>
                  {/* <div class="earn-points">
                    <img src="images/Dollar.svg" alt="" />
                    Points : <span>20</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4">
                <div class="left-side-tabs">
                  <div class="dashboard-left-links">
                    {/* <a href="dashboard_overview.html" className="user-item">
                      <i className="uil uil-apps"></i>Overview
                    </a> */}
                    <Link to={"/myorders"} className="user-item ">
                      <i className="uil uil-box"></i>My Orders
                    </Link>
                    {/* <a href="dashboard_my_rewards.html" className="user-item">
                      <i className="uil uil-gift"></i>My Rewards
                    </a> */}
                    {/* <a href="dashboard_my_wallet.html" className="user-item">
                      <i className="uil uil-wallet"></i>My Wallet
                    </a> */}
                    <Link to={"/wishlist"} className="user-item">
                      <i className="uil uil-heart"></i>Shopping Wishlist
                    </Link>
                    <Link
                      to={"/myaddress"}
                      href="dashboard_my_addresses.html"
                      className="user-item"
                    >
                      <i className="uil uil-location-point"></i>My Address
                    </Link>
                    {/* <a href="sign_in.html" className="user-item"><i className="uil uil-exit"></i>Logout</a> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="dashboard-right">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="main-title-tab">
                        <h4>
                          <i class="uil uil-location-point"></i>My Address
                        </h4>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="pdpt-bg">
                        <div class="pdpt-title">
                          <h4>My Address</h4>
                        </div>
                        <div class="address-body">
                          {/* <Link to="/addAdsress" style={newaddress} className="add-btn hover-btn"    type="button"> Add new-addres</Link> */}

                          {/* //open popup model */}

                          <a
                            href="#"
                            class="add-address hover-btn"
                            style={newaddress}
                            data-toggle="modal"
                            data-target="#address_model"
                          >
                            Add New Address
                          </a>

                          {alladress.map((adrs) => (
                            <div key={adrs.id} class="address-item">
                              <div class="address-icon1">
                                <i class="uil uil-home-alt"></i>
                              </div>

                              <div class="address-dt-all">
                                <p>
                                  {adrs.u_address.flatno},
                                  {adrs.u_address.address}
                                  {adrs.u_address.city},{adrs.u_address.name},
                                  {adrs.u_address.pincode},
                                  {adrs.u_address.phone}
                                </p>
                                <ul class="action-btns">
                                  {/* <a href="#" class="add-address hover-btn"   style={newaddress} data-toggle="modal" data-target="#address_model">Add New Address</a>					   					         */}

                                  <li>
                                    {" "}
                                    <Link
                                      to={`/editadrs/${adrs._id}`}
                                      className="edit-btn"
                                    >
                                      {" "}
                                      <i class="uil uil-edit"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    {" "}
                                    <Link
                                      type="button"
                                      className="view-shop-btn"
                                      onClick={() => deleteAddress(adrs._id)}
                                    >
                                      {" "}
                                      <i class="uil uil-trash-alt"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Body End --> */}
    </div>
  );
};

export default MyAddresess;
