import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { editadres } from "../../Apis/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { geteditadrs } from "../../Apis/api";

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

const EditAddress = () => {
  const [myDetails, setMyDetails] = useState(initialValue);

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

  const { id } = useParams();

  // login customer data
  const customerr = Cookies.get("customerr");

  useEffect(() => {
    //lode data
    loadProductData();
  }, []);

  //for lode the data in edit page

  const loadProductData = async () => {
    //convert cookie data in to object for use

    let response = await geteditadrs(id);
    setMyDetails(response.data.u_address);
  };

  console.log(myDetails);

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

  //edit data

  const editadress = async (e) => {
    e.preventDefault();

    await editadres(id, myDetails);

    history.push("/processtoplaceorder");
  };

  return (
    <>
      <div class="wrapper">
        <div class="all-product-grid">
          <div class="container">
            <div className="row justify-content-between">
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

                            <button
                              type="submit"
                              onClick={(e) => editadress(e)}
                              class="save-btn14 hover-btn"
                            >
                              edit
                            </button>

                            {/* <Link to="processtoplaceorder" class="collapsed ml-auto next-btn16 hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseThree"> Next </Link> */}
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default EditAddress;
