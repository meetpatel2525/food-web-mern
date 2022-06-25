import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../Apis/api";
import { useLocation } from "react-router-dom";
import { searchproductofcategory } from "../../Apis/api";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";

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

const CategoryProductList = () => {
  // console.log(pageno);

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
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //for display data on page lode

  useEffect(() => {
    getAllProducts();
  }, [page]);

  //function of display all data

  const getAllProducts = async () => {
    // hear id store the id of category search in url
    const name = query.get("searchcategory");

    //pagination logic start

    setLoading(true);

    //hear this name and page send in back-end for request
    await searchproductofcategory({ name }, { page });
    // hear storet the responce
    const response = await searchproductofcategory({ name }, { page });

    setTotalPages(response.total_pages);

    //hear we store olde loded data in array and new loded data both togather
    setProducts([...products, ...response.data.data]);
    setLoading(false);
    //pagination logic end
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
                            <a
                              href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html"
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
                                <span
                                  className="like-icon"
                                  title="wishlist"
                                ></span>
                              </div>
                            </a>

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
                          </Grid>
                        ))}
                      </Grid>
                    </div>

                    {/* </div> */}

                    <div className="col-md-12">
                      <div className="more-product-btn">
                        <button
                          onClick={() => setPage(page + 1)}
                          type="button"
                          className="show-more-btn hover-btn"
                        >
                          Lode more
                        </button>
                      </div>
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

export default CategoryProductList;
