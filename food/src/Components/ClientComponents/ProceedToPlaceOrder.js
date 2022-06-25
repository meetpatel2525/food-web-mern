import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { addressofcust } from "../../Apis/api";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { getCart, genrateOtp } from "../../Apis/api";
import { cartDeletePro } from "../../Apis/api";
import { getAdress, deleteadrs } from "../../Apis/api";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import { orange } from "@material-ui/core/colors";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { RadioGroup, RadioButton } from 'react-radio-buttons';

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

const newaddress = {
  margin: "10px 20px 00px 4px",

  textDecoration: "none",
};

// const textadrs = {
// 	margin: '0px px 10px 10px',
// }

const ProceedToPlaceOrder = () => {
  const history = useHistory();

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

  //for display cart data from databise
  useEffect(() => {
    getcartdata();
  }, []);

  const [getCdata, setGEtCdata] = useState([]);

  //get all products
  const getcartdata = async () => {
    var user = JSON.parse(customerr);

    let response = await getCart(user._id);

    const newItem = response.data.map((x) => x.products);

    setGEtCdata(newItem[0]);
  };

  // login customer data
  const customerr = Cookies.get("customerr");

  const delevcharge = 30;

  const totalSaving = getCdata.reduce(
    (mrp, item) => mrp + item.qty * item.mrp,
    0
  );

  const total = getCdata.reduce(
    (discountmrp, item) => discountmrp + item.qty * item.discountmrp,
    0
  );

  const [active, setActive] = React.useState(0);

  //store the values and data in a usestate

  const onValueChange = (e) => {
    // console.log({[e.target.name]: e.target.value});

    //convert cookie data in to object for use
    let cust = JSON.parse(customerr);
    //copy the data of local storage and cookie  in a state myDetails and also copy the data of user enter in the form
    setMyDetails({
      ...myDetails,
      odrdata: getCdata,
      totalprice: total,
      delevrycharge: delevcharge,
      u_id: cust._id,
      [e.target.name]: e.target.value,
    });
  };

  const OrderPlace = () => {
    axios.post("http://localhost:9002/myorder", myDetails).then((res) => {
      history.push("/");
    });
  };

  //delete the products
  const deleteproduct = async (id) => {
    var cust = JSON.parse(customerr);
    await cartDeletePro(cust._id, id);
    window.location.reload();
  };

  // save addresh in databise

  const saveAddresh = async () => {
    const datas = {
      u_id,
      u_address: { address, city, flatno, name, phone, pincode },
    };

    // console.log(datas);
    await addressofcust(datas);
  };

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

  //for show add new address if user click on add new btn only

  const [adrsbtn, setAdrtbtn] = useState();

  const adrsss = async () => {
    const value = 1;
    setAdrtbtn(value);
  };
  // delete the adress

  const deleteAddress = async (id) => {
    await deleteadrs(id);
    console.log(id);
    getAdress();
    window.location.reload(false);
  };

  //send otp to phone number

  // 	const  customphone = JSON.parse(customerr);

  //     const sendopttonumber  = async() => {

  // 	await genrateOtp(customphone._id);

  //     window.location.reload(false);

  // }

  return (
    <>
      {/* <!-- Body Start --> */}
      <div class="wrapper">
        <div class="gambo-Breadcrumb">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="all-product-grid">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-7">
                <div
                  id="checkout_wizard"
                  class="checkout accordion left-chck145"
                >
                  <div class="checkout-step">
                    <div class="checkout-card" id="headingOne">
                      <span class="checkout-step-number">1</span>
                      <h4 class="checkout-step-title">
                        <button
                          class="wizard-btn"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {" "}
                          Phone Number Verification
                        </button>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse in show"
                      data-parent="#checkout_wizard"
                    >
                      <div class="checkout-step-body">
                        <p>
                          We need your phone number so we can inform you about
                          any delay or problem.
                        </p>
                        <p class="phn145">
                          4 digits code send your phone <span>+91</span>
                          <a
                            class="edit-no-btn hover-btn"
                            data-toggle="collapse"
                            href="#edit-number"
                          >
                            Edit
                          </a>
                        </p>
                        <div class="collapse" id="edit-number">
                          <div class="row">
                            <div class="col-lg-8">
                              <div class="checkout-login">
                                <form>
                                  <div class="login-phone">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Phone Number"
                                    />
                                  </div>
                                  {/* <button type='button' class="chck-btn hover-btn" role="button" data-toggle="collapse" href="#otp-verifaction"  onClick={()=> sendopttonumber() }    >Send Code</button> */}
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="otp-verifaction">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="form-group mb-0">
                                <label class="control-label">Enter Code</label>
                                <ul class="code-alrt-inputs">
                                  <li>
                                    <input
                                      id="code[1]"
                                      name="number"
                                      type="text"
                                      placeholder=""
                                      class="form-control input-md"
                                      required=""
                                    />
                                  </li>
                                  <li>
                                    <input
                                      id="code[2]"
                                      name="number"
                                      type="text"
                                      placeholder=""
                                      class="form-control input-md"
                                      required=""
                                    />
                                  </li>
                                  <li>
                                    <input
                                      id="code[3]"
                                      name="number"
                                      type="text"
                                      placeholder=""
                                      class="form-control input-md"
                                      required=""
                                    />
                                  </li>
                                  <li>
                                    <input
                                      id="code[4]"
                                      name="number"
                                      type="text"
                                      placeholder=""
                                      class="form-control input-md"
                                      required=""
                                    />
                                  </li>
                                  <li>
                                    <a
                                      class="collapsed chck-btn hover-btn"
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#checkout_wizard"
                                      href="#collapseTwo"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                                <a href="#" class="resend-link">
                                  Resend Code
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="checkout-step">
                    <div class="checkout-card" id="headingTwo">
                      <span class="checkout-step-number">2</span>
                      <h4 class="checkout-step-title">
                        <button
                          class="wizard-btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          {" "}
                          Select Address
                        </button>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#checkout_wizard"
                    >
                      <div class="checkout-step-body">
                        <div class="checout-address-step">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="rpt100">
                                <div class="form-group">
                                  <div class="product-radio">
                                    <ul class="product-now">
                                      <li>
                                        <input
                                          onChange={(e) => onValueChange(e)}
                                          type="radio"
                                          id="ad1"
                                          name="dplace"
                                          value="home"
                                        />
                                        <label for="ad1">Home</label>
                                      </li>
                                      <li>
                                        <input
                                          onChange={(e) => onValueChange(e)}
                                          type="radio"
                                          id="ad2"
                                          name="dplace"
                                          value="office"
                                        />

                                        {/* <input onChange={(e) => onValueChange(e)} type="hidden" id="ad2" name="meet"  value='meet'/> */}

                                        <label for="ad2">Office</label>
                                      </li>
                                      <li>
                                        <input
                                          onChange={(e) => onValueChange(e)}
                                          type="radio"
                                          id="ad3"
                                          name="dplace"
                                          value="other"
                                        />
                                        <label for="ad3">Other</label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {alladress.map((adrs) => (
                                  <div key={adrs.id}>
                                    <div>
                                      <Link
                                        type="button"
                                        className="view-shop-btn"
                                        onClick={() => deleteAddress(adrs._id)}
                                      >
                                        {<RiDeleteBin5Line />}
                                      </Link>
                                      <Link
                                        to={`/editadrs/${adrs._id}`}
                                        className="edit-btn"
                                      >
                                        {<AiOutlineEdit />}
                                      </Link>
                                      <label class="control-label">
                                        {adrs.u_address.flatno},
                                        {adrs.u_address.address}
                                        {adrs.u_address.city},
                                        {adrs.u_address.name},
                                        {adrs.u_address.pincode},
                                        {adrs.u_address.phone}
                                      </label>
                                      <input
                                        style={{ backgroundColor: "#f55d2c" }}
                                        onChange={(e) => onValueChange(e)}
                                        type="radio"
                                        id="name"
                                        name="adrs_id"
                                        value={adrs._id}
                                        class="form-check-input "
                                        required=""
                                      />
                                    </div>
                                  </div>
                                ))}

                                <Link
                                  to="/addAdsress"
                                  style={newaddress}
                                  className="add-btn hover-btn"
                                  onClick={(e) => adrsss(e)}
                                  value="1"
                                  type="button"
                                >
                                  {" "}
                                  Add new-addres
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* //if user click on add adress than only this form is show  */}

                  {adrsbtn ? (
                    <div class="checkout-step">
                      <form class="">
                        {/* <!-- Multiple Radios (inline) --> */}

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

                                {/* <input onChange={(e) => onValueChange(e)} id="code[4]" name="number" type="text" placeholder="" class="form-control input-md" required=""/> */}
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <div class="address-btns">
                                  <b></b>
                                  <button
                                    type="submit"
                                    onClick={(e) => saveAddresh(e)}
                                    class="save-btn14 hover-btn"
                                  >
                                    Save
                                  </button>

                                  <a
                                    class="collapsed ml-auto next-btn16 hover-btn"
                                    role="button"
                                    data-toggle="collapse"
                                    data-parent="#checkout_wizard"
                                    href="#collapseThree"
                                  >
                                    {" "}
                                    Next{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : null}

                  {/* if user select address than the payment compornant is wisibale  */}

                  {myDetails.adrs_id ? (
                    <div class="checkout-step">
                      <div class="checkout-card" id="headingFour">
                        <span class="checkout-step-number">3</span>
                        <h4 class="checkout-step-title">
                          <button
                            class="wizard-btn collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Payment
                          </button>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#checkout_wizard"
                      >
                        <div class="checkout-step-body">
                          <div class="payment_method-checkout">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="rpt100">
                                  <ul class="radio--group-inline-container_1">
                                    <li>
                                      <div class="radio-item_1">
                                        <input
                                          onChange={(e) => onValueChange(e)}
                                          id="cashondelivery1"
                                          value="0"
                                          name="payment"
                                          type="radio"
                                          data-minimum="50.0"
                                        />
                                        <label
                                          for="cashondelivery1"
                                          class="radio-label_1"
                                        >
                                          Cash on Delivery
                                        </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="radio-item_1">
                                        <input
                                          onChange={(e) => onValueChange(e)}
                                          id="card1"
                                          value="1"
                                          name="payment"
                                          type="radio"
                                          data-minimum="50.0"
                                        />
                                        <label
                                          for="card1"
                                          class="radio-label_1"
                                        >
                                          Credit / Debit Card
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  class="form-group return-departure-dts"
                                  data-method="cashondelivery"
                                >
                                  <div class="row">
                                    <div class="col-lg-12">
                                      <div class="pymnt_title">
                                        <h4>Cash on Delivery</h4>
                                        <p>
                                          Cash on Delivery will not be available
                                          if your order value exceeds $10.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="form-group return-departure-dts"
                                  data-method="card"
                                >
                                  <div class="row">
                                    <div class="col-lg-12">
                                      <div class="pymnt_title mb-4">
                                        <h4>Credit / Debit Card</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {myDetails.payment ? (
                                  <button
                                    type="submit"
                                    onClick={OrderPlace}
                                    class="next-btn16 hover-btn"
                                  >
                                    Place Order
                                  </button>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div class="col-lg-4 col-md-5">
                <div class="pdpt-bg mt-0">
                  <div class="pdpt-title">
                    <h4>Order Summary</h4>
                  </div>

                  <div class="right-cart-dt-body">
                    {getCdata.map((pro) => (
                      <div class="cart-item border_radius">
                        <div class="cart-product-img">
                          <img
                            src={
                              "http://127.0.0.1:9002/public/product/" +
                              pro.image
                            }
                            alt=""
                          />
                          <div class="offer-badge">4% OFF</div>
                        </div>

                        <div class="cart-text">
                          <h4>{pro.proname}</h4>
                          <div class="cart-item-price">
                            ${pro.discountmrp * pro.qty}{" "}
                            <span>${pro.mrp * pro.qty}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteproduct(pro._id)}
                            class="cart-close-btn"
                          >
                            <i class="uil uil-multiply"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div class="total-checkout-group">
                    {/* <div class="cart-total-dil">
									<h4>Gambo Super Market</h4>
									<span>$15</span>
								</div> */}
                    <div class="cart-total-dil pt-3">
                      <h4>Delivery Charges</h4>
                      <span>${delevcharge}</span>
                    </div>
                  </div>
                  <div class="cart-total-dil saving-total ">
                    <h4>Total Saving</h4>
                    <span>${totalSaving}</span>
                  </div>
                  <div class="main-total-cart">
                    <h2>Total</h2>
                    <span>${total + delevcharge}</span>
                  </div>
                  <div class="payment-secure">
                    <i class="uil uil-padlock"></i>Secure checkout
                  </div>
                </div>
                <a href="#" class="promo-link45">
                  Have a promocode?
                </a>
                <div class="checkout-safety-alerts">
                  <p>
                    <i class="uil uil-sync"></i>100% Replacement Guarantee
                  </p>
                  <p>
                    <i class="uil uil-check-square"></i>100% Genuine Products
                  </p>
                  <p>
                    <i class="uil uil-shield-check"></i>Secure Payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Body End --> */}
    </>
  );
};

export default ProceedToPlaceOrder;
