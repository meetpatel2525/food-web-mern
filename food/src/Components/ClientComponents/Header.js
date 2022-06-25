import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Options from "./Options";
import { useState } from "react";
import { getCart } from "../../Apis/api";

const style1 = {
  // width:'30%',
  // height:'30%',
  // margin: '0px 0px 00px 0px',
};

const style2 = {
  width: "100px",
  height: "100px%",
  margin: "00px 0px 0px 0px",
};

const Header = () => {
  // login customer data
  const customerr = Cookies.get("customerr");

  //get data of localstorage of add in wish list
  var wishlist = window.localStorage.getItem("wish");

  //condition for new broeser it give him emty array
  var datawl = wishlist == null ? [] : JSON.parse(wishlist);

  const history = useHistory();

  //for display cart data from databise
  useEffect(() => {
    getcartdata();
  }, []);

  let list = window.localStorage.getItem("productlist");

  let data = list == null ? [] : JSON.parse(list);

  const [getCdata, setGEtCdata] = useState(customerr ? [] : data);

  //get all products
  const getcartdata = async () => {
    //if user is log in than api call
    if (customerr) {
      var user = JSON.parse(customerr);

      let response = await getCart(user._id);

      // setGEtCdata(response.data);

      const newItem = response.data.map((x) => x.products);
      // console.log(newItem[0]);
      setGEtCdata(newItem[0]);
    }
  };
  //logout  function and remove cookie from the admin page

  const customerlogout = () => {
    // for relode page only onace when page lode
    // if(!window.location.hash) {
    //     window.location = window.location + '#logout';
    //     window.location.reload();
    // }
    //for logout
    Cookies.remove("customerr"); //hear we use JSON.stringify for convert the object in to string

    //remove the data from the local storage of cart and wish list at a time of logout
    localStorage.removeItem("productlist");
    // localStorage.removeItem("wish");

    history.push("/");
    window.location.reload();
  };

  return (
    <>
      {/* <!-- Category Model Start--> */}
      <div
        id="category_model"
        className="header-cate-model main-gambo-model modal fade"
        tabIndex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div className="modal-dialog category-area" role="document">
          <div className="category-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-multiply"></i>
              </button>
            </div>
            <div className="category-model-content modal-content">
              <div className="cate-header">
                <h4>Select Category</h4>
              </div>
              <ul className="category-by-cat">
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-1.svg" alt="" />
                    </div>
                    <div className="text"> Fruits and Vegetables </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-2.svg" alt="" />
                    </div>
                    <div className="text"> Grocery & Staples </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-3.svg" alt="" />
                    </div>
                    <div className="text"> Dairy & Eggs </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-4.svg" alt="" />
                    </div>
                    <div className="text"> Beverages </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-5.svg" alt="" />
                    </div>
                    <div className="text"> Snacks </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-6.svg" alt="" />
                    </div>
                    <div className="text"> Home Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-7.svg" alt="" />
                    </div>
                    <div className="text"> Noodles & Sauces </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-8.svg" alt="" />
                    </div>
                    <div className="text"> Personal Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="addon/images/category/icon-9.svg" alt="" />
                    </div>
                    <div className="text"> Pet Care </div>
                  </a>
                </li>
              </ul>
              <a href="#" className="morecate-btn">
                <i className="uil uil-apps"></i>More Categories
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Category Model End-->
	<!-- Search Model Start--> */}
      <div
        id="search_model"
        className="header-cate-model main-gambo-model modal fade"
        tabIndex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div className="modal-dialog search-ground-area" role="document">
          <div className="category-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-multiply"></i>
              </button>
            </div>
            <div className="category-model-content modal-content">
              <div className="search-header">
                <form action="#">
                  <input type="search" placeholder="Search for products..." />
                  <button type="submit">
                    <i className="uil uil-search"></i>
                  </button>
                </form>
              </div>
              <div className="search-by-cat">
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-1.svg" alt="" />
                  </div>
                  <div className="text">Fruits and Vegetables</div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-2.svg" alt="" />
                  </div>
                  <div className="text"> Grocery & Staples </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-3.svg" alt="" />
                  </div>
                  <div className="text"> Dairy & Eggs </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-4.svg" alt="" />
                  </div>
                  <div className="text"> Beverages </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-5.svg" alt="" />
                  </div>
                  <div className="text"> Snacks </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-6.svg" alt="" />
                  </div>
                  <div className="text"> Home Care </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-7.svg" alt="" />
                  </div>
                  <div className="text"> Noodles & Sauces </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-8.svg" alt="" />
                  </div>
                  <div className="text"> Personal Care </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="addon/images/category/icon-9.svg" alt="" />
                  </div>
                  <div className="text"> Pet Care </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Search Model End-->
	
	{/* <!-- Cart Sidebar Offsetl End-->
	<!-- Header Start --> */}
      <header className="header clearfix">
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <a href="index.html">
                <img src="addon/images/dark-logo-1.svg" alt="" />
              </a>
            </div>
            <div className="main_logo" id="logo">
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
            <div className="select_location">
              <div className="ui inline dropdown loc-title">
                <div className="text">
                  <i className="uil uil-location-point"></i>
                  Gurugram
                </div>
                <i className="uil uil-angle-down icon__14"></i>
                <div className="menu dropdown_loc">
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Gurugram
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    New Delhi
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Bangaluru
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Mumbai
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Hyderabad
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Kolkata
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Ludhiana
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Chandigrah
                  </div>
                </div>
              </div>
            </div>
            <div className="search120">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search for products.."
                  />
                  <i className="uil uil-search-alt icon icon1"></i>
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  {customerr ? null : (
                    <Link
                      to={"/customerlogin"}
                      className="dropdown-item admin-dropdown-item"
                    >
                      Login
                    </Link>
                  )}
                </li>

                <li>
                  <a href="#" className="offer-link">
                    <i className="uil uil-phone-alt"></i>1800-000-000
                  </a>
                </li>
                <li>
                  <a href="offers.html" className="offer-link">
                    <i className="uil uil-gift"></i>Offers
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="offer-link">
                    <i className="uil uil-question-circle"></i>Help
                  </a>
                </li>
                <li>
                  <Link
                    to={"/wishlist"}
                    className="option_links"
                    title="Wishlist"
                  >
                    <i className="uil uil-heart icon_wishlist"></i>
                    <span className="noti_count1">{datawl.length}</span>
                  </Link>
                </li>

                <li className="ui dropdown">
                  {customerr ? (
                    <Options customerr={customerr}    customerlogout={customerlogout} />
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown">
              <a
                href="#"
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
                <span className="cate__icon">Select Category</span>
              </a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container-fluid">
                <button
                  className="navbar-toggler menu_toggle_btn"
                  type="button"
                  data-target="#navbarSupportedContent"
                >
                  <i className="uil uil-bars"></i>
                </button>
                <div
                  className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main_nav align-self-stretch">
                    <li className="nav-item">
                      <Link to="/" className="nav-link" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feturedproducts"
                        className="nav-link new_item"
                        title="New Products"
                      >
                        New Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/feturedproducts"
                        className="nav-link"
                        title="Featured Products"
                      >
                        Featured Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Pages">
                          Pages <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <Link
                            to="/dashbordoverview"
                            className="item channel_item page__links"
                          >
                            Account
                          </Link>
                          <Link
                            to="/aboutus"
                            className="item channel_item page__links"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/feturedproducts"
                            className="item channel_item page__links"
                          >
                            Shop Grid
                          </Link>
                          <a
                            href="single_product_view.html"
                            className="item channel_item page__links"
                          >
                            Single Product View
                          </a>
                          <a
                            href="checkout.html"
                            className="item channel_item page__links"
                          >
                            Checkout
                          </a>
                          <a
                            href="request_product.html"
                            className="item channel_item page__links"
                          >
                            Product Request
                          </a>
                          <a
                            href="order_placed.html"
                            className="item channel_item page__links"
                          >
                            Order Placed
                          </a>
                          <a
                            href="bill.html"
                            className="item channel_item page__links"
                          >
                            Bill Slip
                          </a>
                          <a
                            href="sign_in.html"
                            className="item channel_item page__links"
                          >
                            Sign In
                          </a>
                          <a
                            href="sign_up.html"
                            className="item channel_item page__links"
                          >
                            Sign Up
                          </a>
                          <a
                            href="forgot_password.html"
                            className="item channel_item page__links"
                          >
                            Forgot Password
                          </a>
                          <a
                            href="contact_us.html"
                            className="item channel_item page__links"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Blog">
                          Blog <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <Link
                            to="/overblog"
                            className="item channel_item page__links"
                          >
                            Our Blog
                          </Link>
                          <a
                            href="blog_no_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog Two No Sidebar
                          </a>
                          <a
                            href="blog_left_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog with Left Sidebar
                          </a>
                          <a
                            href="blog_right_sidebar.html"
                            className="item channel_item page__links"
                          >
                            Our Blog with Right Sidebar
                          </a>
                          <a
                            href="blog_detail_view.html"
                            className="item channel_item page__links"
                          >
                            Blog Detail View
                          </a>
                          <a
                            href="blog_left_sidebar_single_view.html"
                            className="item channel_item page__links"
                          >
                            Blog Detail View with Sidebar
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contactus"
                        className="nav-link"
                        title="Contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="catey__icon">
              <a
                href="#"
                className="cate__btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
              </a>
            </div>
            <div style={style1} className="header_cart order-1">
              <Link
                to="/cart"
                style={{ textDecoration: "none" }}
                className="cart__btn hover-btn "
                title="Cart"
              >
                <i className="uil uil-shopping-cart-alt"></i>
                <span>Cart</span>
                <ins>{getCdata.length}</ins>
                <i className="uil uil-angle-down"></i>
              </Link>
              {/* <div  className="search__icon order-1"> */}
              <a
                href="#"
                style={style2}
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search"></i>
              </a>
              {/* </div> */}
            </div>
            <div style={style2} className="search__icon order-1">
              <a
                href="#"
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </>
  );
};

export default Header;
