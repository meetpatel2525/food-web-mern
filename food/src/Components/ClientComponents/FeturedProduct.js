import React from 'react'

const FeturedProduct = () => {
	
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
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Vegetables & Fruits</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="all-product-grid">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="product-top-dt">
							<div className="product-left-title">
								<h2>Vegetables & Fruits</h2>
							</div>
							<a href="#" className="filter-btn pull-bs-canvas-right">Filters</a>
							<div className="product-sort">
								<div className="ui selection dropdown vchrt-dropdown">
									<input name="gender" type="hidden" value="default"/>
									<i className="dropdown icon d-icon"></i>
									<div className="text">Popularity</div>
									<div className="menu">
										<div className="item" data-value="0">Popularity</div>
										<div className="item" data-value="1">Price - Low to High</div>
										<div className="item" data-value="2">Price - High to Low</div>
										<div className="item" data-value="3">Alphabetical</div>
										<div className="item" data-value="4">Saving - High to Low</div>
										<div className="item" data-value="5">Saving - Low to High</div>
										<div className="item" data-value="6">% Off - High to Low</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-list-view">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-1.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">6% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$12 <span>$15</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-2.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">2% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$10 <span>$13</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-3.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">5% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$5 <span>$8</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-4.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">3% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$15 <span>$20</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-5.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">2% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$9 <span>$10</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-6.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">2% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$7 <span>$8</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-7.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">1% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$6.95 <span>$7</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-11.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">6% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$12 <span>$15</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-12.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">2% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$10 <span>$13</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-13.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">5% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$5 <span>$8</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-14.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">1% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$6.95 <span>$7</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="product-item mb-30">
								<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
									<img src="addon/images/product/img-8.jpg" alt=""/>
									<div className="product-absolute-options">
										<span className="offer-badge-1">3% off</span>
										<span className="like-icon" title="wishlist"></span>
									</div>
								</a>
								<div className="product-text-dt">
									<p>Available<span>(In Stock)</span></p>
									<h4>Product Title Here</h4>
									<div className="product-price">$8 <span>$10</span></div>
									<div className="qty-cart">
										<div className="quantity buttons_added">
											<input type="button" defaultValue="-" className="minus minus-btn"/>
											<input type="number" step="1" name="quantity" defaultValue="1" className="input-text qty text"/>
											<input type="button" defaultValue="+" className="plus plus-btn"/>
										</div>
										<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="more-product-btn">
								<button className="show-more-btn hover-btn" onClick="window.location.href = '#';">Show More</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Body End --> */}
        </>
    )
}

export default FeturedProduct
