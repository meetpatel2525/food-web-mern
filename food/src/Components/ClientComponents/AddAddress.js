import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { addressofcust } from "../../Apis/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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

const style3 = {
  textDecoration: "none",
  margin: "0px 0px 00px 0px",
};

const AddAddress = () => {
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
  const customerr = Cookies.get("customerr");

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
                            {/* onClick={(e) =>saveAddresh(e)} */}
                            <button
                              type="submit"
                              onClick={(e) => saveAddresh(e)}
                              class="save-btn14 hover-btn"
                            >
                              Save
                            </button>

                            <Link
                              to="processtoplaceorder"
                              class="collapsed ml-auto next-btn16 hover-btn"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#checkout_wizard"
                              href="#collapseThree"
                            >
                              {" "}
                              Next{" "}
                            </Link>
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

export default AddAddress;
