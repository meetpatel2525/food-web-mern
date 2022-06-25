import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getMyOrders } from "../../Apis/api";


//   // login customer data
//   const customerr = Cookies.get("customerr");
 
// var cust = JSON.parse(customerr);


const style1 = {
  borderBottom: 0,
};

const MyOrders = () => {
  // fordisplay order data
  const [myorders, setMyOrders] = useState([]);

  useEffect(() => {
    myOrderList();
  }, []);

  //function of display all data   of orders

  // login customer data
  const customerr = Cookies.get("customerr");

  const myOrderList = async () => {
    let cust = JSON.parse(customerr);

    let response = await getMyOrders(cust._id);

    setMyOrders(response.data);
  };
  console.log(myorders);
  return (
    <>
      {/* <!-- Body Start --> */}
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      My Orders
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-group">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="user-dt">
                  <div className="user-img">
                    {/* <img src="addon/images/avatar/img-5.jpg" alt="" /> */}
                    <div className="img-add">
                      {/* <input type="file" id="file" />
                      <label for="file">
                        <i className="uil uil-camera-plus"></i>
                      </label> */}
                    </div>
                  </div>
                  {/* <h4> {cust ? cust.name :null  }  </h4> */}
                  <p>
                    {/* +91 {cust ? cust.number :null  }   */}
                    {/* <a href="#">
                      <i className="uil uil-edit"></i>
                    </a> */}
                  </p>
                  {/* <div className="earn-points">
                    <img src="addon/images/Dollar.svg" alt="" />
                    Points : <span>20</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="left-side-tabs">
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
              <div className="col-lg-9 col-md-8">
                <div className="dashboard-right">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-title-tab">
                        <h4>
                          <i className="uil uil-box"></i>My Orders
                        </h4>
                      </div>
                    </div>

                    {myorders.map((orders) => (
                      <div key={orders.id} className="col-lg-12 col-md-12">
                        <div className="pdpt-bg">
                          <div className="pdpt-title">
                            <h6>Delivery Timing 10 May, 3.00PM - 6.00PM</h6>
                          </div>

                          <div className="order-body10">
                            {orders.odrdata.map((products) => (
                              <ul key={products.id} className="order-dtsll">
                                <li>
                                  <div className="order-dt-img">
                                    <img
                                      src={
                                        "http://127.0.0.1:9002/public/product/" +
                                        products.image
                                      }
                                      alt=""
                                    />

                                    {/* <img src="addon/images/groceries.svg" alt=""/> */}
                                  </div>
                                </li>
                                <li>
                                  <div className="order-dt47">
                                    <h4>{products.proname}</h4>
                                    <p>Delivered - smart</p>
                                    {/* <div className="order-title"> <span data-inverted="" data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div> */}
                                  </div>
                                </li>
                              </ul>
                            ))}
                            <div className="total-dt">
                              <div className="total-checkout-group">
                                <div className="cart-total-dil">
                                  <h4>Sub Total</h4>
                                  <span>${orders.totalprice}</span>
                                </div>
                                <div className="cart-total-dil pt-3">
                                  <h4>Delivery Charges</h4>
                                  <span>{orders.delevrycharge}</span>
                                </div>
                              </div>
                              <div className="main-total-cart">
                                <h2>Total</h2>
                                <span>
                                  ${orders.totalprice + orders.delevrycharge}
                                </span>
                              </div>
                            </div>

                            <div className="track-order">
                              <h4>Track Order</h4>

                              {/* console.log(orders.status) */}

                              {orders.status == "panding" ? (
                                <div className="bs-wizard" style={style1}>
                                  <div className="bs-wizard-step complete">
                                    <div className="text-center bs-wizard-stepnum">
                                      order panding
                                    </div>
                                    <div className="progress">
                                      {/* <div className="progress-bar"></div> */}
                                    </div>
                                    <a href="#" className="bs-wizard-dot"></a>
                                  </div>
                                </div>
                              ) : null}

                              <div className="bs-wizard" style={style1}>
                                {orders.statuslog.map((stat) => (
                                  <div
                                    key={stat.id}
                                    className="bs-wizard-step complete"
                                  >
                                    <div className="text-center bs-wizard-stepnum">
                                      {stat.status}
                                    </div>

                                    <div className="progress">
                                      {stat.status ? (
                                        <div className="progress-bar"></div>
                                      ) : null}
                                    </div>
                                    <div className="text-center bs-wizard-stepnum">
                                      {stat.statuslog}
                                    </div>
                                    <a href="#" className="bs-wizard-dot"></a>
                                  </div>
                                ))}
                              </div>
                              {/* <div className="bs-wizard-step complete">
                                                 
														<div className="text-center bs-wizard-stepnum">Packed</div>
														<div className="progress">
														<div className="progress-bar"></div>
														</div>
														<a href="#" className="bs-wizard-dot"></a>
													</div>
													<div className="bs-wizard-step complete">
                                                  
														<div className="text-center bs-wizard-stepnum">Arrived</div>
														<div className="progress">
														<div className="progress-bar"></div>
														</div>
														<a href="#" className="bs-wizard-dot"></a>
													</div>
													<div className="bs-wizard-step complete">

                                                        <div className="text-center bs-wizard-stepnum">Delivered</div>
														<div className="progress">
														<div className="progress-bar"></div>
														
														</div>
														<a href="#" className="bs-wizard-dot"></a>
													</div>
												</div>
												
											</div>
											<div className="call-bill">
												<div className="delivery-man">
													<a href="#"><i className="uil uil-rss"></i>Feedback</a>
												</div>
												<div className="order-bill-slip">
													<a href="#" className="bill-btn5 hover-btn">View Bill</a>
												</div> */}
                            </div>
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
      {/* <!-- Body End --> */}
    </>
  );
};

export default MyOrders;

// {
// 	orders.statuslog.map((stat)=>
// 		<div key={stat.id} className="bs-wizard-step complete">
// 			<div className="text-center bs-wizard-stepnum">Placed</div>
// 			<div className="progress">

// 		<div className={`statuslog ${stat.status ?  "progress-bar" : "" }`}></div>

// 			</div>
// 			<a href="#" className="bs-wizard-dot"></a>

// 		</div>
// 		)}
