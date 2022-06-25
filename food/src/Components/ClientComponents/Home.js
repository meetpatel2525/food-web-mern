import "core-js/es/map";
import "core-js/es/set";
import React from "react";
import { getCategory } from "../../Apis/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { searchproductofcategory } from "../../Apis/api";
import { Link } from "react-router-dom";
import AllProducts from "../AdminComponents/AllProducts";
//slider
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function useQuery(){
//     return new URLSearchParams(useLocation().search);
// }

//slider image

const useStyles = makeStyles({
  box: {
    // width: '100px',
    // margin: '20px 00px 00px 20px',
    width: "80%",
    height: "60%",
    display: "block",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
  },
  name: {
    width: "80%",
    height: "60%",
    margin: "15px 50px 0px 30px",
    fontFamily: "Lato",
    fontSize: "90%",
    margin: "5px",
    padding: "5px",
  },
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "2px",
    margin: "10px 0px 0px 20px",
    align: "center",
  },
});

const Home = () => {
  const classes = useStyles();

  //slider settings

  const settings = {
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 500,

    slidesToShow: 6,
    swipeToSlide: true,

    afterChange: function (index) {
      //   console.log(
      // 	`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      //   );
    },
  };

  //variable for displayy all data
  const [categorys, setCategorys] = useState([]);

  //for display data on page lode
  useEffect(() => {
    getAllCategory();
  }, []);

  //function of display all data
  const getAllCategory = async () => {
    let response = await getCategory();

    setCategorys(response.data);
  };

  //store images in variable

  // const images = categorys.map(cat=>{
  // 	return <img key={cat} src={ "http://127.0.0.1:9002/public/images/"+cat.image}
  // 	/>})

  // // for relode page only onace when page lode
  // if(!window.location.hash) {
  //     window.location = window.location + '#loaded';
  //     window.location.reload();
  // }

  return (
    <>
      {/* <!-- Header End -->
	<!-- Body Start --> */}
      <div className="wrapper">
        {/* <!-- Offers Start --> */}
        <div className="main-banner-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel offers-banner owl-theme">
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="addon/images/banners/offer-1.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>6% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Fresh Vegetables</span>
                        </div>
                        <a href="#" className="Offer-shop-btn hover-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="addon/images/banners/offer-2.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>5% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Fresh Fruits</span>
                        </div>
                        <a href="#" className="Offer-shop-btn hover-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="addon/images/banners/offer-3.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>3% Off</p>
                          <div className="top-text-1">
                            Hot Deals on New Items
                          </div>
                          <span>Daily Essentials Eggs & Dairy</span>
                        </div>
                        <a href="#" className="Offer-shop-btn hover-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="addon/images/banners/offer-4.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>2% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Beverages</span>
                        </div>
                        <a href="#" className="Offer-shop-btn hover-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="addon/images/banners/offer-5.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>3% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Nuts & Snacks</span>
                        </div>
                        <a href="#" className="Offer-shop-btn hover-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Offers End -->

		<!-- Categories Start --> */}

        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>Shop By</span>
                    <h2>Categories</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                {/* slider of image */}

                <Slider {...settings}>
                  {categorys.map((cat, index) => (
                    <div key={cat.id}>
                      <div className={classes.box}>
                        {/* when i click on category image is redirect me on products  */}
                        <Link
                          to={`/catproductlists?searchcategory=${cat.name}`}
                        >
                          {" "}
                          {/* hear we use url query and search id */}
                          <img
                            className={classes.img}
                            src={
                              "http://127.0.0.1:9002/public/images/" + cat.image
                            }
                            alt=""
                            
                          />
                        </Link>
                        <h4 className={classes.name}>{cat.name}</h4>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Categories End -->
		<!-- Featured Products Start --> */}
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>For You</span>
                    <h2>Top Featured Products</h2>
                  </div>
                  <a href="#" className="see-more-btn">
                    See All
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-carousel featured-slider owl-theme">
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-1.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">6% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $12 <span>$15</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-2.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $10 <span>$13</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-3.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">5% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $5 <span>$8</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-4.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">3% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $15 <span>$20</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-5.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $9 <span>$10</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-6.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $7 <span>$8</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="images/product/img-7.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">1% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $6.95 <span>$7</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-8.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">3% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $8 <span>$10</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Featured Products End -->
		<!-- Best Values Offers Start --> */}
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>Offers</span>
                    <h2>Best Values</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="#" className="best-offer-item">
                  <img src="addon/images/best-offers/offer-1.jpg" alt="" />
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="#" className="best-offer-item">
                  <img src="addon/images/best-offers/offer-2.jpg" alt="" />
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="#" className="best-offer-item offr-none">
                  <img src="addon/images/best-offers/offer-3.jpg" alt="" />
                  <div className="cmtk_dt">
                    <div
                      className="product_countdown-timer offer-counter-text"
                      data-countdown="2021/01/06"
                    ></div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a href="#" className="code-offer-item">
                  <img src="addon/images/best-offers/offer-4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Best Values Offers End -->
		<!-- Vegetables and Fruits Start --> */}
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>For You</span>
                    <h2>Fresh Vegetables & Fruits</h2>
                  </div>
                  <a href="#" className="see-more-btn">
                    See All
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-carousel featured-slider owl-theme">
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-11.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">6% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $12 <span>$15</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-12.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $10 <span>$13</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-13.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">5% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $5 <span>$8</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-1.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">3% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $15 <span>$20</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-5.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $9 <span>$10</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-6.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">2% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $7 <span>$8</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-14.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">1% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $6.95 <span>$7</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-3.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">3% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $8 <span>$10</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Vegetables and Fruits Products End -->
		<!-- New Products Start --> */}
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>For You</span>
                    <h2>Added New Products</h2>
                  </div>
                  <a href="#" className="see-more-btn">
                    See All
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-carousel featured-slider owl-theme">
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-10.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $12 <span>$15</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-9.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">$10</div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-15.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">5% off</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">$5</div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-11.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $15 <span>$16</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-14.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">$9</div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-2.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">$7</div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-5.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">$6.95</div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-item">
                      <a
                        href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                        className="product-img"
                      >
                        <img src="addon/images/product/img-6.jpg" alt="" />
                        <div className="product-absolute-options">
                          <span className="offer-badge-1">New</span>
                          <span className="like-icon" title="wishlist"></span>
                        </div>
                      </a>
                      <div className="product-text-dt">
                        <p>
                          Available<span>(In Stock)</span>
                        </p>
                        <h4>Product Title Here</h4>
                        <div className="product-price">
                          $8 <span>8.75</span>
                        </div>
                        <div className="qty-cart">
                          <div className="quantity buttons_added">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus minus-btn"
                            />
                            <input
                              type="number"
                              step="1"
                              name="quantity"
                              defaultValue="1"
                              className="input-text qty text"
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus plus-btn"
                            />
                          </div>
                          <span className="cart-icon">
                            <i className="uil uil-shopping-cart-alt"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- New Products End --> */}
      </div>
      {/* <!-- Body End --> */}
    </>
  );
};

export default Home;
