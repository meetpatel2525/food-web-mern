import React from "react";
// import AdminDesBord from './AdminComponents/AdminDesBord'
import AdminFooter from "./AdminComponents/AdminFooter";
// import LoginForm from './AdminComponents/LoginForm'
import Main from "./AdminComponents/Main";
import Nav from "./AdminComponents/Nav";
import AddCategories from "./AdminComponents/AddCategories";
import AllCategory from "./AdminComponents/AllCategory";
import AddProducts from "./AdminComponents/AddProducts";
import AllProducts from "./AdminComponents/AllProducts";
import { HashRouter, Switch, Route } from "react-router-dom";
import EditCategories from "./AdminComponents/EditCategories";
import EditProducts from "./AdminComponents/EditProducts";

const AdminPanel = () => {
  return (
    <>
      {/* <LoginForm/> */}
      {/* <AdminDesBord/> */}
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/addcategory" component={AddCategories} />
          {/* search  */}
          {/* <Route exact path='/allcategory/search?searchQuery=${search}' component={AllCategory}/>  */}
          <Route exact path="/allcategory" component={AllCategory} />
          <Route exact path="/editctegory/:id" component={EditCategories} />
          <Route exact path="/addproduct" component={AddProducts} />
          <Route exact path="/allproducts" component={AllProducts} />
          <Route exact path="/editproduct/:id" component={EditProducts} />
        </Switch>
        <AdminFooter />
      </HashRouter>
    </>
  );
};

export default AdminPanel;
