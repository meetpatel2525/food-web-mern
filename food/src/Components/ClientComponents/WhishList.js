import React from "react";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";


//   // login customer data
//   const customerr = Cookies.get("customerr");
 
// var cust = JSON.parse(customerr);

const WhishList = () => {
  //local storege data get for show wishlist

  let list = window.localStorage.getItem("wish");
  let data = list == null ? [] : JSON.parse(list);

  //delete all product of wishlist

  const deleteproductwish = (id) => {
    const filteredProducts = data.filter((item, index) => {
      return item._id !== id;
    });
    localStorage.setItem("wish", JSON.stringify(filteredProducts));
    window.location.reload();
  };

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
                    <div class="img-add">
                      {/* <input type="file" id="file" />
                      <label for="file">
                        <i class="uil uil-camera-plus"></i>
                      </label> */}
                    </div>
                  </div>
                  {/* <h4> {cust ? cust.name :null } </h4> */}
                  <p>
                    {/* +91 {cust ? cust.number :null  }   */}
                    {/* <a href="#">
                      <i class="uil uil-edit"></i>
                    </a> */}
                  </p>
                  {/* <div class="earn-points">
                    <img src="addon/images/Dollar.svg" alt="" />
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
                          <i class="uil uil-heart"></i>Shopping Wishlist
                        </h4>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="pdpt-bg">
                        {data.map((pro) => (
                          <div class="wishlist-body-dtt">
                            <div class="cart-item">
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
                                  ${pro.discountmrp}
                                  <span>${pro.mrp}</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => deleteproductwish(pro._id)}
                                  class="cart-close-btn"
                                >
                                  <i class="uil uil-trash-alt"></i>
                                </button>
                              </div>
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
      {/* </div> */}
      {/* <!-- Body End --> */}
    </>
  );
};

export default WhishList;
