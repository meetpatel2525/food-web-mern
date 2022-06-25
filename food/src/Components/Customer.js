import React from "react";
import Footer from "./ClientComponents/Footer";
import Header from "./ClientComponents/Header";
import Contact from "./ClientComponents/Contact";
import DashbordOverview from "./ClientComponents/DashbordOverview";
import FeturedProduct from "./ClientComponents/FeturedProduct";
import Overblog from "./ClientComponents/Overblog";
import Aboutus from "./ClientComponents/Aboutus";
import Home from "./ClientComponents/Home";
import ViewSingleProduct from "./ClientComponents/ViewSingleProduct";
import CategoryProductList from "./ClientComponents/CategoryProductList";
import { useState } from "react";
import CustomerSignup from "./ClientComponents/CustomerSignup";
import CustomerSignIn from "./ClientComponents/CustomerSignIn";
import Cart from "./ClientComponents/Cart";
import ProceedToPlaceOrder from "./ClientComponents/ProceedToPlaceOrder";
import WhishList from "./ClientComponents/WhishList";
import {
  HashRouter, //replaced with HashRouter
} from "react-router-dom";
import {
  // BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import MyOrders from "./ClientComponents/MyOrders";
import AddAddress from "./ClientComponents/AddAddress";
import EditAddress from "./ClientComponents/EditAddress";
import MyAddresess from "./ClientComponents/MyAddresess";
// import Demo from './ClientComponents/Demo';


const Customer = () => {


  // variable for  authontication of customer

  const [logincustomer, setLoginCustomer] = useState({});

  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home setLoginCustomer={setLoginCustomer} />
          </Route>
          <Route exact path="/feturedproducts">
            <FeturedProduct />
          </Route>
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Route exact path="/dashbordoverview">
            <DashbordOverview />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/overblog">
            <Overblog />
          </Route>

          {/* <Route exact path="/catproductlists">
   <Demo/>
    </Route> */}

          <Route exact path="/catproductlists">
            <CategoryProductList />
          </Route>
          <Route exact path="/viewsingleproduct/:id">
            <ViewSingleProduct />
          </Route>
          <Route exact path="/customerregistration">
            <CustomerSignup />
          </Route>
          <Route exact path="/customerlogin">
            <CustomerSignIn setLoginCustomer={setLoginCustomer} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/processtoplaceorder">
            {/* // logicfor authontication of customer */}
            {
              // ._id  store the id from the mongodb databaise
              logincustomer && logincustomer._id ? (
                <ProceedToPlaceOrder setLoginCustomer={setLoginCustomer} />
              ) : (
                <CustomerSignIn setLoginCustomer={setLoginCustomer} />
              )
            }
          </Route>
          <Route exact path="/wishlist">
            <WhishList    />
          </Route>
          <Route exact path="/myorders">
            {/* // logicfor authontication of customer */}
            {
              // ._id  store the id from the mongodb databaise
              logincustomer && logincustomer._id ? (
                <MyOrders   setLoginCustomer={setLoginCustomer} />
              ) : (
                <CustomerSignIn setLoginCustomer={setLoginCustomer} />
              )
            }
            {/* <MyOrders/> */}
          </Route>
          <Route exact path="/addAdsress">
            <AddAddress   />
          </Route>
          <Route exact path="/editadrs/:id">
            <EditAddress />
          </Route>
          <Route exact path="/myaddress">
            <MyAddresess />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};
export default Customer;
