import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  //logout  function and remove cookie from the admin page

    const logout = () => {

    Cookies.remove("userr"); //hear we use JSON.stringify for convert the object in to string

    history.push("/login");
    window.location.reload();

  };

  return (
    <div>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <nav className="sb-topnav navbar navbar-expand navbar-light bg-clr">
            <a className="navbar-brand logo-brand" href="index.html">
              Food Supermarket
            </a>
            <button
              className="btn btn-link btn-sm order-1 order-lg-0"
              id="sidebarToggle"
              href="#"
            >
              <i className="fas fa-bars"></i>
            </button>
            {/* <a
              href="http://gambolthemes.net/html-items/gambo_supermarket_demo/index.html"
              class="frnt-link"
            >
              <i class="fas fa-external-link-alt"></i>Home
            </a> */}
            <button
              onClick={logout}
              type="button"
              className="dropdown-item admin-dropdown-item"
            >
              Logout
            </button>
            <ul className="navbar-nav ml-auto mr-md-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-user fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <a
                    className="dropdown-item admin-dropdown-item"
                    href="#"
                  >
                    Edit Profile
                  </a>
                  <a
                    className="dropdown-item admin-dropdown-item"
                    href="#"
                  >
                    Change Password
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <nav
                className="sb-sidenav accordion sb-sidenav-dark"
                id="sidenavAccordion"
              >
                <div className="sb-sidenav-menu">
                  <div className="nav">
                    <Link className="nav-link active" to="/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      Dashboard
                    </Link>
                    {/* <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLayouts"
                      aria-expanded="false"
                      aria-controls="collapseLayouts"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      Posts
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a> */}
                    {/* <div
                      className="collapse"
                      id="collapseLayouts"
                      aria-labelledby="headingOne"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link sub_nav_link" href="posts.html">
                          All Posts
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="add_post.html"
                        >
                          Add New
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="post_categories.html"
                        >
                          Categories
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="post_tags.html"
                        >
                          Tags
                        </a>
                      </nav>
                    </div> */}
                    {/* <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLocations"
                      aria-expanded="false"
                      aria-controls="collapseLocations"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      Locations
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a> */}
                    {/* <div
                      className="collapse"
                      id="collapseLocations"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a
                          className="nav-link sub_nav_link"
                          href="locations.html"
                        >
                          All Locations
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="add_location.html"
                        >
                          Add Location
                        </a>
                      </nav>
                    </div> */}
                    {/* <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseAreas"
                      aria-expanded="false"
                      aria-controls="collapseAreas"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-map-marked-alt"></i>
                      </div>
                      Areas
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a> */}
                    <div
                      className="collapse"
                      id="collapseAreas"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link sub_nav_link" href="#">
                          All Areas
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="#"
                        >
                          Add Area
                        </a>
                      </nav>
                    </div>
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseCategories"
                      aria-expanded="false"
                      aria-controls="collapseCategories"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-list"></i>
                      </div>
                      Categories
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseCategories"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link
                          className="nav-link sub_nav_link"
                          to="/allcategory"
                        >
                          All Categories
                        </Link>
                        <Link
                          className="nav-link sub_nav_link"
                          to="/addcategory"
                        >
                          Add Category
                        </Link>
                      </nav>
                    </div>
                    {/* <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseShops"
                      aria-expanded="false"
                      aria-controls="collapseShops"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-store"></i>
                      </div>
                      Shops
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseShops"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link sub_nav_link" href="shops.html">
                          All Shops
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="add_shop.html"
                        >
                          Add Shop
                        </a>
                      </nav>
                    </div> */}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseProducts"
                      aria-expanded="false"
                      aria-controls="collapseProducts"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-box"></i>
                      </div>
                      Products
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseProducts"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link
                          className="nav-link sub_nav_link"
                          to="/allproducts"
                        >
                          All Products
                        </Link>
                        <Link
                          className="nav-link sub_nav_link"
                          to="/addproduct"
                        >
                          Add Product
                        </Link>
                      </nav>
                    </div>
                    <Link className="nav-link" to="/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-cart-arrow-down"></i>
                      </div>
                      Orders
                    </Link>
                    {/* <a className="nav-link" href="customers.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      Customers
                    </a>
                    <a className="nav-link" href="offers.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-gift"></i>
                      </div>
                      Offers
                    </a>
                    <a className="nav-link" href="pages.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      Pages
                    </a>
                    <a className="nav-link" href="menu.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-layer-group"></i>
                      </div>
                      Menu
                    </a>
                    <a className="nav-link" href="updater.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </div>
                      Updater
                    </a>
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseSettings"
                      aria-expanded="false"
                      aria-controls="collapseSettings"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-cog"></i>
                      </div>
                      Setting
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseSettings"
                      aria-labelledby="headingTwo"
                      data-parent="#sidenavAccordion"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a
                          className="nav-link sub_nav_link"
                          href="general_setting.html"
                        >
                          General Settings
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="payment_setting.html"
                        >
                          Payment Settings
                        </a>
                        <a
                          className="nav-link sub_nav_link"
                          href="email_setting.html"
                        >
                          Email Settings
                        </a>
                      </nav>
                    </div>
                    <a className="nav-link" href="reports.html">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-chart-bar"></i>
                      </div>
                      Reports
                    </a> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
