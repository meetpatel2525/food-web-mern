import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// login customer data
// const customerr = Cookies.get("customerr");
// var user = JSON.parse(customerr);

// console.log(user);

const Options = ({ customerlogout,customerr }) => {  
  
  var user = JSON.parse(customerr);

  return (

    <div>
      <li className="ui dropdown">
        <a href="#" className="opts_account">
          <img src="addon/images/avatar/img-5.jpg" alt="" />
          <span className="user__name"> {user ? user.name :null  }  </span>
          <i className="uil uil-angle-down"></i>
        </a>
        <div className="menu dropdown_account">
          <div className="night_mode_switch__btn">
            <a href="#" id="night-mode" className="btn-night-mode">
              <i className="uil uil-moon"></i> Night mode
              <span className="btn-night-mode-switch">
                <span className="uk-switch-button"></span>
              </span>
            </a>
          </div>
          <Link to="/" className="item channel_item">
            <i className="uil uil-apps icon__1"></i>Dashbaord
          </Link>
          <Link to={"/myorders"} className="item channel_item">
            <i className="uil uil-box icon__1"></i>My Orders
          </Link>
          <Link to={"/wishlist"} className="item channel_item">
            <i className="uil uil-heart icon__1"></i>My Wishlist
          </Link>
          {/* <a href="dashboard_my_wallet.html" className="item channel_item">
            <i className="uil uil-usd-circle icon__1"></i>My Wallet
          </a> */}
          <Link to="/myaddress" className="item channel_item">
            <i className="uil uil-location-point icon__1"></i>My Address
          </Link>
          {/* <a href="offers.html" className="item channel_item">
            <i className="uil uil-gift icon__1"></i>Offers
          </a> */}
          {/* <a href="faq.html" className="item channel_item">
            <i className="uil uil-info-circle icon__1"></i>Faq
          </a> */}
          {/* <Link to="/customerregistration" className="item channel_item"><i className="uil uil-lock-alt icon__1"></i>Login</Link> */}
          <button
            onClick={customerlogout}
            type="button"
            className="item channel_item"
          >
            <i className="uil uil-lock-alt icon__1"></i>Logout
          </button>
        </div>
      </li>
    </div>
  );
};

export default Options;
