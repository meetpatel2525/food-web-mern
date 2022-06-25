import React from 'react'

const Footer = () => {
    return (
        <>          
            {/* <!-- Footer Start --> */}
	<footer className="footer">
		<div className="footer-first-row">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<ul className="call-email-alt">
							<li><a href="#" className="callemail"><i className="uil uil-dialpad-alt"></i>1800-000-000</a></li>
							<li><a href="#" className="callemail"><i className="uil uil-envelope-alt"></i>info@gambosupermarket.com</a></li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="social-links-footer">
							<ul>
								<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
								<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="#"><i className="fab fa-instagram"></i></a></li>
								<li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
							</ul>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<div className="footer-second-row">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="second-row-item">
							<h4>Categories</h4>
							<ul>
								<li><a href="#">Fruits and Vegetables</a></li>
								<li><a href="#">Grocery & Staples</a></li>
								<li><a href="#">Dairy & Eggs</a></li>
								<li><a href="#">Beverages</a></li>
								<li><a href="#">Snacks</a></li>
								<li><a href="#">Home Care</a></li>
								<li><a href="#">Noodles & Sauces</a></li>
								<li><a href="#">Personal Care</a></li>
								<li><a href="#">Pet Care</a></li>
								<li><a href="#">Meat & Seafood</a></li>
								<li><a href="#">Electronics</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="second-row-item">
							<h4>Useful Links</h4>
							<ul>
								<li><a href="about_us.html">About US</a></li>
								<li><a href="shop_grid.html">Featured Products</a></li>
								<li><a href="offers.html">Offers</a></li>
								<li><a href="our_blog.html">Blog</a></li>
								<li><a href="faq.html">Faq</a></li>
								<li><a href="career.html">Careers</a></li>
								<li><a href="contact_us.html">Contact Us</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="second-row-item">
							<h4>Top Cities</h4>
							<ul>
								<li><a href="#">Gurugram</a></li>
								<li><a href="#">New Delhi</a></li>
								<li><a href="#">Bangaluru</a></li>
								<li><a href="#">Mumbai</a></li>
								<li><a href="#">Hyderabad</a></li>
								<li><a href="#">Kolkata</a></li>
								<li><a href="#">Ludhiana</a></li>
								<li><a href="#">Chandigrah</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="second-row-item-app">
							<h4>Download App</h4>
							<ul>
								<li><a href="#"><img className="download-btn" src="addon/images/download-1.svg" alt=""/></a></li>
								<li><a href="#"><img className="download-btn" src="addon/images/download-2.svg" alt=""/></a></li>
							</ul>
						</div>
						<div className="second-row-item-payment">
							<h4>Payment Method</h4>
							<div className="footer-payments">
								<ul id="paypal-gateway" className="financial-institutes">
									<li className="financial-institutes__logo">
									  <img alt="Visa" title="Visa" src="addon/images/footer-icons/pyicon-6.svg"/>
									</li>
									<li className="financial-institutes__logo">
									  <img alt="Visa" title="Visa" src="addon/images/footer-icons/pyicon-1.svg"/>
									</li>
									<li className="financial-institutes__logo">
									  <img alt="MasterCard" title="MasterCard" src="addon/images/footer-icons/pyicon-2.svg"/>
									</li>
									<li className="financial-institutes__logo">
									  <img alt="American Express" title="American Express" src="addon/images/footer-icons/pyicon-3.svg"/>
									</li>
									<li className="financial-institutes__logo">
									  <img alt="Discover" title="Discover" src="addon/images/footer-icons/pyicon-4.svg"/>
									</li>
								</ul>
							</div>
						</div>
						<div className="second-row-item-payment">
							<h4>Newsletter</h4>
							<div className="newsletter-input">
								<input id="email" name="email" type="text" placeholder="Email Address" className="form-control input-md" required=""/>
								<button className="newsletter-btn hover-btn" type="submit"><i className="uil uil-telegram-alt"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-last-row">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="footer-bottom-links">
							<ul>
								<li><a href="about_us.html">About</a></li>
								<li><a href="contact_us.html">Contact</a></li>
								<li><a href="privacy_policy.html">Privacy Policy</a></li>
								<li><a href="term_and_conditions.html">Term & Conditions</a></li>
								<li><a href="refund_and_return_policy.html">Refund & Return Policy</a></li>
							</ul>
						</div>
						<div className="copyright-text">
							<i className="uil uil-copyright"></i>Copyright 2020 <b>Gambolthemes</b> . All rights reserved
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- Footer End --> */}

        </>
    )
}

export default Footer
