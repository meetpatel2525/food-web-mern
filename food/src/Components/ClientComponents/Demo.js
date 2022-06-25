import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../Apis/api";
import { Link, useLocation } from "react-router-dom";
import { getCart, searchproductofcategory } from "../../Apis/api";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { LoadingPosts } from "./LoadingPosts";
// import { addtocart } from '../../Apis/api';
import axios from "axios";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  box: {
    margin: "30px 00px 00px 30px",
    width: "50%",
    height: "90%",
    display: "block",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
  },
}));

//for search from url

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialValue = {
  proname: "",
  category: "",
  mrp: "",
  discountmrp: "",
  stock: "",
  status: "",
  description: "",
  image: "",
};
const Demo = () => {
  // function of getting the values of local storage of addtocart
  const getDatafromLS = () => {
    //get the data of local storage
    const data = localStorage.getItem("productlist");

    //condition for browser if brower hase no localstorage it give nill array
    return data == null ? [] : JSON.parse(data);
  };

  // function of getting the values of local storage of wishlist
  const getWL = () => {
    //get the data of local storage
    const datawl = localStorage.getItem("wish");

    //condition for browser if brower hase no localstorage it give nill array
    return datawl == null ? [] : JSON.parse(datawl);
  };

  //locatstorage function for addto cart
  let [cart, setCart] = useState(getDatafromLS());

  //locatstorage function for wishlist
  let [wish, setWish] = useState(getWL());

  const [product, setProduct] = useState(initialValue);

  //for search query
  const query = useQuery();

  const searchQuery = query.get("searchcategory"); //   we use searchcategory in click event url

  //  store the data of searchcategory in searchQuery

  const {
    proname,
    category,
    mrp,
    discountmrp,
    stock,
    status,
    descriptionimage,
  } = product;

  const { id } = useParams();

  const classes = useStyles();

  //variable for displayy all data
  const [products, setProducts] = useState([]);

  //pagination of lode-more
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //for display data on page lode

  useEffect(() => {
    getAllProducts();
  }, []);

  //for display cart data from databise

  useEffect(() => {
    getcartdata();
  }, []);

  const [getCdata, setGEtCdata] = useState([]);

  // function of display all data

  const getcartdata = async () => {
    let response = await getCart();

    setGEtCdata(response.data);
    console.log(getCdata);
  };

  //function of display all data

  const getAllProducts = async () => {
    //for increment the value of page
    setPage(page + 1);

    // hear id store the id of category search in url
    const name = query.get("searchcategory");
    //pagination logic start
    setLoading(true);
    try {
      //hear this name and page send in back-end for request
      // await searchproductofcategory({name},{page})
      // hear storet the responce
      const response = await searchproductofcategory({ name }, { page });
      const { data, pages: totalPages } = await response.data;
      setTotalPage(totalPages);
      // console.log();
      // console.log(loading);
      //hear we store olde loded data in array and new loded data both togather
      setProducts([...products, ...data]);

      //setProducts (response.data.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("some error ocured  ");
    }
  };
  //pagination logic end

  //javascript fix code for loding at scroll

  function getScrollTop() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  }

  function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  window.onscroll = function (event) {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return; //for scroll or button tuch
    // if (getScrollTop() + window.innerHeight > getDocumentHeight() *0.8 ) return;
    getAllProducts(); //only add hear the name of the function u want to run at api calling
  };

  // function add product in cart and local storage of wishlist
  const addtoWishlist = (pro, id) => {
    // console.log(pro);
    pro.qty = 1;
    //logic of add unique id and incrise when add butern more than one times

    const productExist = wish.find((item) => item._id === pro._id);
    //    console.log("wish me");
    //    console.log(productExist);
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

  useEffect(() => {
    localStorage.setItem("productlist", JSON.stringify(cart));
  }, [cart]);

  // login customer data
  const customerr = Cookies.get("customerr");

  // function add product in cart and local storage both with condion of login user
  const addtocat = async (pro, id) => {
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
  return (
    <>
      {/* <!-- Body Start --> */}

      <div className="sb-nav-fixed">
        {/* <div id="layoutSidenav"> */}

        {/* <div id="layoutSidenav_content"></div> */}

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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        name
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
                <div className="col-lg-12">
                  <div className="product-top-dt">
                    <div className="product-left-title">
                      <h2>{}</h2>
                    </div>
                    <a href="#" className="filter-btn pull-bs-canvas-right">
                      Filters
                    </a>
                    <div className="product-sort">
                      <div className="ui selection dropdown vchrt-dropdown">
                        <input name="gender" type="hidden" value="default" />
                        <i className="dropdown icon d-icon"></i>
                        <div className="text">Popularity</div>
                        <div className="menu">
                          <div className="item" data-value="0">
                            Popularity
                          </div>
                          <div className="item" data-value="1">
                            Price - Low to High
                          </div>
                          <div className="item" data-value="2">
                            Price - High to Low
                          </div>
                          <div className="item" data-value="3">
                            Alphabetical
                          </div>
                          <div className="item" data-value="4">
                            Saving - High to Low
                          </div>
                          <div className="item" data-value="5">
                            Saving - Low to High
                          </div>
                          <div className="item" data-value="6">
                            % Off - High to Low
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <div className={classes.root}>
                      <Grid
                        container
                        spacing={4}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                      >
                        {products.map((pro) => (
                          <Grid
                            item
                            xxl={2}
                            xl={3}
                            key={pro.id}
                            className={classes.box}
                          >
                            <div>
                              <Link
                                to={`/viewsingleproduct/${pro._id}`}
                                className="product-img"
                              >
                                <img
                                  src={
                                    "http://127.0.0.1:9002/public/product/" +
                                    pro.image
                                  }
                                  alt=""
                                />
                                <div className="product-absolute-options">
                                  <span className="offer-badge-1">
                                    {pro.discountmrp}% off
                                  </span>
                                </div>
                              </Link>

                              <div className="product-text-dt">
                                <p>
                                  {pro.status}
                                  <span>(Stock{pro.stock})</span>
                                </p>
                                <h4>{pro.proname}</h4>
                                <div className="product-price">
                                  ${pro.mrp}
                                  <span></span>
                                </div>
                                <div className="qty-cart">
                                  <span
                                    className="like-icon save-icon"
                                    onClick={() => addtoWishlist(pro)}
                                    title="wishlist"
                                  ></span>
                                  <span className="cart-icon">
                                    <i
                                      onClick={() => addtocat(pro, pro._id)}
                                      className="uil uil-shopping-cart-alt"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </div>

                    {/* </div> */}

                    <div>
                      {/* //if data lode gif of loding show otherwise not  */}
                      {loading ? <LoadingPosts /> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Body End --> */}
        </div>
      </div>
    </>
  );
};

export default Demo;
