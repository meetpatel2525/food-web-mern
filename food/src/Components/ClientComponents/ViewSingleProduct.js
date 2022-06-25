import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../Apis/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const order = {
  margin: "0px 0px 00px 20px",
};

const styleimg = {
  width: "30%",
  height: "30%",
  margin: "-2px 0px 00px 10px",
};
const style3 = {
  textDecoration: "none",
  margin: "0px 0px 00px 0px",
};

const styleimg2 = {
  width: "100%",
  height: "100%",
  margin: "0px 0px 00px 0px",
};

const initialValue = {
  _id: "",
  proname: "",
  category: "",
  mrp: "",
  discountmrp: "",
  stock: "",
  status: "",
  description: "",
  image: "",
};

const ViewSingleProduct = () => {
  // function of getting the values of local storage
  const getDatafromLS = () => {
    //get method of local storage
    const data = localStorage.getItem("productlist");

    // let dataa = data.push[({quntity:"",totalprice:""})]

    //condition for browser if localStorage  has no data it pass null arry
    return data == null ? [] : JSON.parse(data);
  };

  // function of getting the values of local storage of wishlist
  const getWL = () => {
    //get the data of local storage
    const datawl = localStorage.getItem("wish");
    // console.log("hello");
    //condition for browser if brower hase no localstorage it give nill array
    return datawl == null ? [] : JSON.parse(datawl);
  };

  //locatstorage function for wishlist
  let [wish, setWish] = useState(getWL());

  const history = useHistory();

  const [product, setProduct] = useState(initialValue);

  const {
    _id,
    proname,
    category,
    mrp,
    discountmrp,
    stock,
    status,
    image,
    description,
  } = product;

  const { id } = useParams();
  //locatstorage function
  let [cart, setCart] = useState(getDatafromLS());

  useEffect(() => {
    //lode data
    loadProductData();
  }, []);
  //for lode the data in edit page
  const loadProductData = async () => {
    const response = await getProducts(id);

    setProduct(response.data);
  };

  useEffect(() => {
    localStorage.setItem("productlist", JSON.stringify(cart));
  }, [cart]);

  // login customer data
  const customerr = Cookies.get("customerr");

  // function add product in cart and local storage  with validation og login

  const addtocat = async (pro, id) => {
    // console.log(pro._id);
    pro.qty = 1;

    //chek if cookie is set ? (user is login ) if login than api call and store data in bakend if not than store data in locakl storage
    if (customerr) {
      var cust = JSON.parse(customerr);

      // store product data in a variable
      let productdata = [];
      productdata.push(pro);

      //add product details and login user in a veriable
      const payload = {
        products: productdata,
        u_id: cust._id,
      };

      console.log(payload);

      await axios.post("http://localhost:9002/cart", payload).then((res) => {
        alert("add product sussecfuly");
        window.location.reload();
      });

      //if user is not login than it store the data in local storage
    } else {
      console.log("localstorage");
      pro.qty = 1;

      //logic of add unique id and incrise when add butern more than one times

      const productExist = cart.find((item) => item._id === pro._id);
      console.log(productExist);
      if (productExist) {
        setCart(
          cart.map((item) =>
            item._id === pro._id
              ? { ...productExist, qty: productExist.qty + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...pro, qty: 1 }]);
        alert("add product");
        window.location.reload();
      }
    }
  };

  //process to pay  routhing

  const processtopay = () => {
    history.push("/processtoplaceorder");
    window.location.reload();
  };

  // function add product in cart and local storage of wishlist

  const addtoWishlist = (pro, id) => {
    pro.qty = 1;

    //logic of add ithem in wishlist

    const productExist = wish.find((item) => item._id === pro._id);

    if (productExist) {
      setWish(
        wish.map((item) =>
          item._id === pro._id
            ? { ...productExist, qty: productExist.qty }
            : item
        )
      );
      console.log("if");
    } else {
      console.log("else");
      setWish([...wish, { ...pro, qty: 1 }]);

      alert("----ADD TO WISHLIST------");
      window.location.reload();
    }
  };

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  return (
    <>
      <div className="sb-nav-fixed">
        {/* <!-- Body Start --> */}
        <div className="wrapper">
          <div className="gambo-Breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="shop_grid.html">Vegetables & Fruits</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product Title
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="all-product-grid">
            <div className="container">
              <div className="row">
                <div className="">
                  <div className="product-dt-view">
                    <div className="row">
                      <div style={styleimg}>
                        <div id="sync1">
                          <img
                            style={styleimg2}
                            src={
                              "http://127.0.0.1:9002/public/product/" +
                              product.image
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="product-dt-right">
                          <h2>{proname}</h2>
                          <div className="no-stock">
                            <p className="pd-no">
                              Product No.<span>{_id}</span>
                            </p>
                            <p className="stock-qty">
                              {" "}
                              {status}
                              <span>(Instock)</span>
                            </p>
                          </div>
                          <div className="product-radio">
                            <ul className="product-now">
                              <li>
                                <input type="radio" id="p1" name="product1" />
                                <label for="p1">500g</label>
                              </li>
                              <li>
                                <input type="radio" id="p2" name="product1" />
                                <label for="p2">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="p3" name="product1" />
                                <label for="p3">2kg</label>
                              </li>
                              <li>
                                <input type="radio" id="p4" name="product1" />
                                <label for="p4">3kg</label>
                              </li>
                            </ul>
                          </div>
                          <p className="pp-descp">{description}</p>
                          <div className="product-group-dt">
                            <ul>
                              <li>
                                <div className="main-price color-discount">
                                  Discount Price<span>${discountmrp}</span>
                                </div>
                              </li>
                              <li>
                                <div className="main-price mrp-price">
                                  MRP Price<span>${mrp}</span>
                                </div>
                              </li>
                              <b></b>
                            </ul>
                            <ul className="gty-wish-share">
                              <li>
                                {/* <div className="qty-product">
														<div className="quantity buttons_added">
															<input type="button" value="-" className="minus minus-btn"/>
															<input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
															<input type="button" value="+" className="plus plus-btn"/>
														</div>
													</div> */}
                              </li>
                            </ul>

                            <ul className="ordr-crt-share">
                              <button
                                className="add-cart-btn hover-btn"
                                style={style3}
                                onClick={() => addtocat(product, id)}
                              >
                                {" "}
                                {<AiOutlineShoppingCart />} Add to Cart
                              </button>
                              {/* <li><Link to="/myorders" type='button' style={{ textDecoration: 'none' }}  className="add-cart-btn hover-btn"><i  style={style3} className="uil uil-shopping-cart-alt"></i></Link></li> */}
                              <li>
                                <button
                                  className="add-cart-btn hover-btn"
                                  style={order}
                                  onClick={processtopay}
                                >
                                  Order Now
                                </button>
                              </li>
                              <li>
                                <span
                                  onClick={() => addtoWishlist(product)}
                                  className="like-icon save-icon"
                                  title="wishlist"
                                ></span>
                              </li>
                            </ul>
                          </div>
                          <div className="pdp-details">
                            <ul>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-usd-circle"></i>
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>Lowest Price Guaranteed</span>
                                    <p>
                                      Get difference refunded if you find it
                                      cheaper anywhere else.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-cloud-redo"></i>
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>Easy Returns & Refunds</span>
                                    <p>
                                      Return products at doorstep and get refund
                                      in seconds.
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>More Like This</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="addon/images/product/img-6.jpg" alt="" />
                          <div className="offer-badge">4% OFF</div>
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k1" name="cart1" />
                                <label for="k1">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k2" name="cart1" />
                                <label for="k2">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k3" name="cart1" />
                                <label for="k3">2kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k4" name="cart1" />
                                <label for="k4">3kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">
                              $12 <span>$15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="addon/images/product/img-2.jpg" alt="" />
                          <div className="offer-badge">6% OFF</div>
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k5" name="cart2" />
                                <label for="k5">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k6" name="cart2" />
                                <label for="k6">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k7" name="cart2" />
                                <label for="k7">2kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">
                              $24 <span>$30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item border_radius">
                        <a
                          href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
                          className="cart-product-img"
                        >
                          <img src="addon/images/product/img-5.jpg" alt="" />
                        </a>
                        <div className="cart-text">
                          <h4>Product Title Here</h4>
                          <div className="cart-radio">
                            <ul className="kggrm-now">
                              <li>
                                <input type="radio" id="k8" name="cart3" />
                                <label for="k8">0.50</label>
                              </li>
                              <li>
                                <input type="radio" id="k9" name="cart3" />
                                <label for="k9">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="k10" name="cart3" />
                                <label for="k10">1.50kg</label>
                              </li>
                            </ul>
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <div className="cart-item-price">$15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>Product Details</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="pdct-dts-1">
                        <div className="pdct-dt-step">
                          <h4>Description</h4>
                          <p>{description}</p>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>Benefits</h4>
                          <div className="product_attr">
                            Aliquam nec nulla accumsan, accumsan nisl in,
                            rhoncus sapien.
                            <br />
                            In mollis lorem a porta congue.
                            <br />
                            Sed quis neque sit amet nulla maximus dignissim id
                            mollis urna.
                            <br />
                            Cras non libero at lorem laoreet finibus vel et
                            turpis.
                            <br />
                            Mauris maximus ligula at sem lobortis congue.
                            <br />
                          </div>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>How to Use</h4>
                          <div className="product_attr">
                            The peeled, orange segments can be added to the
                            daily fruit bowl, and its juice is a refreshing
                            drink.
                          </div>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>Seller</h4>
                          <div className="product_attr">
                            Gambolthemes Pvt Ltd, Sks Nagar, Near Mbd Mall,
                            Ludhana, 141001
                          </div>
                        </div>
                        <div className="pdct-dt-step">
                          <h4>Disclaimer</h4>
                          <p>
                            Phasellus efficitur eu ligula consequat ornare. Nam
                            et nisl eget magna aliquam consectetur. Aliquam quis
                            tristique lacus. Donec eget nibh et quam maximus
                            rutrum eget ut ipsum. Nam fringilla metus id dui
                            sollicitudin, sit amet maximus sapien malesuada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Featured Products Start --> */}
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                          <img src="addon/images/product/img-7.jpg" alt="" />
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
                                value="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step="1"
                                name="quantity"
                                value="1"
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                value="+"
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
          {/* <!-- Featured Products End --> */}
        </div>
      </div>
      {/* <!-- Body End --> */}
    </>
  );
};

export default ViewSingleProduct;
