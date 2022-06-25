
// import React from 'react'
// import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';


// const AdminDesBord = () => {

//     const style1 = {
//         width:'200px',
//       };
//       const style2 = {
//         width:'130px',
//       };
//       const style3 = {
//         width:'130px',
//       };
//       const style4 = {
//         width:'300px',
//       };
//       const style5 = {
//         width:'130px',
//       };
//       const style6 = {
//         width:'130px',
//       };
//       const style7 = {
//         width:'100px',

//       };


// 	  const history = useHistory() 
	
// 	  //logout  function and remove cookie from the admin page 

// 	  const logout =()=>{

// 		Cookies.remove("user")//hear we use JSON.stringify for convert the object in to string
		
// 		history.push("/login")

// }

//     return (
//         <>
            
//             <div className="sb-nav-fixed">
//         <nav className="sb-topnav navbar navbar-expand navbar-light bg-clr">
//             <a className="navbar-brand logo-brand" href="index.html">Gambo Supermarket</a>
// 			<button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
//             <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/index.html" className="frnt-link"><i className="fas fa-external-link-alt"></i>Home</a>
//             <ul className="navbar-nav ml-auto mr-md-0">
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
//                     <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
//                         <a className="dropdown-item admin-dropdown-item" href="edit_profile.html">Edit Profile</a>
// 						<a className="dropdown-item admin-dropdown-item" href="change_password.html">Change Password</a>
// 						<button  onClick={logout} type="button"  className="dropdown-item admin-dropdown-item" >Logout</button>
//                     </div>
//                 </li>
//             </ul>
//         </nav>
//         <div id="layoutSidenav">
//             <div id="layoutSidenav_nav">
//                 <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
//                     <div className="sb-sidenav-menu">
//                         <div className="nav">
//                             <a className="nav-link active" href="index.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
//                                 Dashboard
// 							</a>
//                              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
// 								<div className="sb-nav-link-icon"><i className="fas fa-newspaper"></i></div>
//                                 Posts
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="posts.html">All Posts</a>
// 									<a className="nav-link sub_nav_link" href="add_post.html">Add New</a>
// 									<a className="nav-link sub_nav_link" href="post_categories.html">Categories</a>
// 									<a className="nav-link sub_nav_link" href="post_tags.html">Tags</a>
// 								</nav>
//                             </div>		
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLocations" aria-expanded="false" aria-controls="collapseLocations">
// 								<div className="sb-nav-link-icon"><i className="fas fa-map-marker-alt"></i></div>
//                                 Locations
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseLocations" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="locations.html">All Locations</a>
// 									<a className="nav-link sub_nav_link" href="add_location.html">Add Location</a>
// 								</nav>
//                             </div>		
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAreas" aria-expanded="false" aria-controls="collapseAreas">
// 								<div className="sb-nav-link-icon"><i className="fas fa-map-marked-alt"></i></div>
//                                 Areas
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseAreas" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="areas.html">All Areas</a>
// 									<a className="nav-link sub_nav_link" href="add_area.html">Add Area</a>
// 								</nav>
//                             </div>
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
// 								<div className="sb-nav-link-icon"><i className="fas fa-list"></i></div>
//                                 Categories
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseCategories" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="category.html">All Categories</a>
// 									<a className="nav-link sub_nav_link" href="add_category.html">Add Category</a>
// 								</nav>
//                             </div>
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
// 								<div className="sb-nav-link-icon"><i className="fas fa-store"></i></div>
//                                 Shops
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseShops" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="shops.html">All Shops</a>
// 									<a className="nav-link sub_nav_link" href="add_shop.html">Add Shop</a>
// 								</nav>
//                             </div>
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
// 								<div className="sb-nav-link-icon"><i className="fas fa-box"></i></div>
//                                 Products
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="products.html">All Products</a>
// 									<a className="nav-link sub_nav_link" href="add_product.html">Add Product</a>
// 								</nav>
//                             </div>
// 							<a className="nav-link" href="orders.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-cart-arrow-down"></i></div>
//                                 Orders
// 							</a>
// 							<a className="nav-link" href="customers.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
//                                 Customers
// 							</a>
// 							<a className="nav-link" href="offers.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-gift"></i></div>
//                                 Offers
// 							</a>
// 							<a className="nav-link" href="pages.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
//                                 Pages
// 							</a>
//                             <a className="nav-link" href="menu.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-layer-group"></i></div>
//                                 Menu
// 							</a>
// 							<a className="nav-link" href="updater.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-cloud-upload-alt"></i></div>
//                                 Updater
// 							</a>
// 							<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
// 								<div className="sb-nav-link-icon"><i className="fas fa-cog"></i></div>
//                                 Setting
//                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
// 							</a>
//                             <div className="collapse" id="collapseSettings" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
//                                 <nav className="sb-sidenav-menu-nested nav">
// 									<a className="nav-link sub_nav_link" href="general_setting.html">General Settings</a>
// 									<a className="nav-link sub_nav_link" href="payment_setting.html">Payment Settings</a>
// 									<a className="nav-link sub_nav_link" href="email_setting.html">Email Settings</a>
// 								</nav>
//                             </div>
// 							<a className="nav-link" href="reports.html">
// 								<div className="sb-nav-link-icon"><i className="fas fa-chart-bar"></i></div>
//                                 Reports
// 							</a>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//             <div id="layoutSidenav_content">
//                 <main>
//                     <div className="container-fluid">
//                         <h2 className="mt-30 page-title">Dashboard</h2>
//                         <ol className="breadcrumb mb-30">
//                             <li className="breadcrumb-item active">Dashboard</li>
//                         </ol>
//                         <div className="row">
//                             <div className="col-xl-3 col-md-6">
//                                 <div className="dashboard-report-card purple">
// 									<div className="card-content">
// 										<span className="card-title">Order Pending</span>
// 										<span className="card-count">2</span>
// 									</div>
// 									<div className="card-media">
// 										<i className="fab fa-rev"></i>
// 									</div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-md-6">
// 								<div className="dashboard-report-card red">
// 									<div className="card-content">
// 										<span className="card-title">Order Cancel</span>
// 										<span className="card-count">0</span>
// 									</div>
// 									<div className="card-media">
// 										<i className="far fa-times-circle"></i>
// 									</div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-md-6">
//                                 <div className="dashboard-report-card info">
// 									<div className="card-content">
// 										<span className="card-title">Order Process</span>
// 										<span className="card-count">5</span>
// 									</div>
// 									<div className="card-media">
// 										<i className="fas fa-sync-alt rpt_icon"></i>
// 									</div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-md-6">
// 								<div className="dashboard-report-card success">
// 									<div className="card-content">
// 										<span className="card-title">Today Income</span>
// 										<span className="card-count">$9568.00</span>
// 									</div>
// 									<div className="card-media">
// 										<i className="fas fa-money-bill rpt_icon"></i>
// 									</div>
//                                 </div>
//                             </div>
// 							<div className="col-xl-12 col-md-12">
// 								<div className="card card-static-1 mb-30">
// 									<div className="card-body">
// 										<div id="earningGraph"></div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-xl-12 col-md-12">
// 								<div className="card card-static-2 mb-30">
// 									<div className="card-title-2">
// 										<h4>Recent Orders</h4>
// 										<a href="orders.html" className="view-btn hover-btn">View All</a> 
// 									</div>
// 									<div className="card-body-table">
// 										<div className="table-responsive">
// 											<table className="table ucp-table table-hover">
// 												<thead>
// 													<tr>
//                                                     <th style={style1}>Order ID</th>
// 														<th style={style2}>Item</th>
// 														<th style={style3}>Date</th>
// 														<th style={style4} >Address</th>
// 														<th style={style5}>Status</th>
// 														<th style={style6}>Total</th>
// 														<th style={style7}>Action</th>
// 														{/* <th style={"width:130px"}>Order ID</th>
// 														<th>Item</th>
// 														<th style={"width:200px"}>Date</th>
// 														<th style={"width:300px"}>Address</th>
// 														<th style={"width:130px"}>Status</th>
// 														<th style={"width:130px"}>Total</th>
// 														<th style={"width:100px"}>Action</th> */}
// 													</tr>
// 												</thead>
// 												<tbody>
// 													<tr>
// 														<td>ORDER12345</td>
// 														<td>
// 															<a href="#" target="_blank">Product Title Here</a>
// 														</td>
// 														<td>
// 															<span className="delivery-time">15/06/2020</span>
// 															<span className="delivery-time">4:00PM - 6.00PM</span>
// 														</td>
// 														<td>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</td>
// 														<td>
// 															<span className="badge-item badge-status">Pending</span>
// 														</td>
// 														<td>$90</td>
// 														<td className="action-btns">
// 															<a href="order_view.html" className="views-btn"><i className="fas fa-eye"></i></a>
// 															<a href="order_edit.html" className="edit-btn"><i className="fas fa-edit"></i></a>
// 														</td>
// 													</tr>
// 													<tr>
// 														<td>ORDER12346</td>
// 														<td>
// 															<a href="#" target="_blank">Product Title Here</a>
// 														</td>
// 														<td>
// 															<span className="delivery-time">13/06/2020</span>
// 															<span className="delivery-time">2:00PM - 4.00PM</span>
// 														</td>
// 														<td>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</td>
// 														 <td>
// 															<span className="badge-item badge-status">Pending</span>
// 														</td>
// 														<td>$105</td>
// 														<td className="action-btns">
// 															<a href="order_view.html" className="views-btn"><i className="fas fa-eye"></i></a>
// 															<a href="order_edit.html" className="edit-btn"><i className="fas fa-edit"></i></a>
// 														</td>
// 													</tr>
// 													<tr>
// 														<td>ORDER12347</td>
// 														<td>
// 															<a href="#" target="_blank">Product Title Here</a>
// 														</td>
// 														<td>
// 															<span className="delivery-time">13/6/2020</span>
// 															<span className="delivery-time">5:00PM - 7.00PM</span>
// 														</td>
// 														<td>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</td>
// 														<td>
// 															<span className="badge-item badge-status">Pending</span>
// 														</td>
// 														<td>$60</td>
// 														<td className="action-btns">
// 															<a href="order_view.html" className="views-btn"><i className="fas fa-eye"></i></a>
// 															<a href="order_edit.html" className="edit-btn"><i className="fas fa-edit"></i></a>
// 														</td>
// 													</tr>
// 													<tr>
// 														<td>ORDER12348</td>
// 														<td>
// 															<a href="#" target="_blank">Product Title Here</a>
// 														</td>
// 														<td>
// 															<span className="delivery-time">12/06/2020</span>
// 															<span className="delivery-time">01:00PM - 3.00PM</span>
// 														</td>
// 														<td>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</td>
// 														<td>
// 															<span className="badge-item badge-status">Pending</span>
// 														</td>
// 														<td>$120</td>
// 														<td className="action-btns">
// 															<a href="order_view.html" className="views-btn"><i className="fas fa-eye"></i></a>
// 															<a href="order_edit.html" className="edit-btn"><i className="fas fa-edit"></i></a>
// 														</td>
// 													</tr>
// 												</tbody>
// 											</table>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
//                         </div>
//                     </div>
//                 </main>
//                 <footer className="py-4 bg-footer mt-auto">
//                     <div className="container-fluid">
//                         <div className="d-flex align-items-center justify-content-between small">
//                             <div className="text-muted-1">© 2020 <b>Gambo Supermarket</b>. by <a href="https://themeforest.net/user/gambolthemes">Gambolthemes</a></div>
//                             <div className="footer-links">
//                                 <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/privacy_policy.html">Privacy Policy</a>
//                                 <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/term_and_conditions.html">Terms &amp; Conditions</a>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </div>
       
       
//     </div>



//         </>
//     )
// }

// export default AdminDesBord
