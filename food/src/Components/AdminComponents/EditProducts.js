import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { editProduct, getProducts } from "../../Apis/api";
import { getCategory } from "../../Apis/api";
import { deleteProductImage } from "../../Apis/api";
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

const deletebtpro = {
  margin: "-20px 00px 00px 80px",
  color: "#FFFFFF",
};

const EditProducts = () => {
  const [product, setProduct] = useState(initialValue);
  // const [selectFile, setSelectFile] = useState('');
  const {
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

  let history = useHistory();

  const [categorys, setCategorys] = useState([]);

  //for display data in dropdown of category function

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    let response = await getCategory();

    console.log(response.data);

    setCategorys(response.data);
  };

  useEffect(() => {
    //lode data
    loadProductData();
  }, []);

  //for lode the data in edit page

  const loadProductData = async () => {
    const response = await getProducts(id);
    setProduct(response.data);
  };

  //edit data

  const editProductDetails = async () => {
    console.log(product.image);
    //for image
    const formdatapro = new FormData();

    if (product.newimag) {
      //for image uplode   //append() method inserts a set of Node objects or DOMString objects after the last child of the Element

      formdatapro.append("prodFile", product.newimag, product.newimag.name);
    }
    formdatapro.append("proname", product.proname);
    formdatapro.append("category", product.category);
    formdatapro.append("mrp", product.mrp);
    formdatapro.append("discountmrp", product.discountmrp);
    formdatapro.append("stock", product.stock);
    formdatapro.append("status", product.status);
    formdatapro.append("description", product.description);

    await editProduct(id, formdatapro);

    history.push("/allproducts");
  };

  //for data
  const onValueChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //for image
  const handlePhoto = (e) => {
    //for single image uplode
    console.log(e.target.files[0]);
    setProduct({ ...product, newimag: e.target.files[0] });
  };

  // delete single image only

  const deleteProductsImage = async (id, product) => {
    await deleteProductImage(id, product); //id hold the id of category and category holde the image
    console.log(id, product);
    // for refresh the page
    window.location.reload(false);
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <form encType="multipart/form-data">
          <div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <main>
                <div className="container-fluid">
                  <h2 className="mt-30 page-title">Edit Products</h2>
                 
                  {/* <ol className="breadcrumb mb-30">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="products.html">Products</a>
                    </li>
                    <li className="breadcrumb-item active">Add Product</li>
                  </ol> */}
                 
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="card card-static-2 mb-30">
                        <div className="card-title-2">
                          <h4>Add New Product</h4>
                        </div>
                        <div className="card-body-table">
                          <div className="news-content-right pd-20">
                            <div className="form-group">
                              <label className="form-label">Name*</label>
                              <input
                                type="text"
                                onChange={(e) => onValueChange(e)}
                                value={proname}
                                name="proname"
                                className="form-control"
                                placeholder="product Name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Category*</label>

                              <select
                                id="categtory"
                                onChange={(e) => onValueChange(e)}
                                value={category}
                                name="category"
                                className="form-control"
                              >
                                {categorys.map((cat) => (
                                  <option value={`${cat._id}`}>
                                    {cat.name}
                                  </option> //{`${cat._id}`}use this for get id of tha name ( for store category id in product table )
                                ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="form-label">MRP*</label>
                              <input
                                type="number"
                                onChange={(e) => onValueChange(e)}
                                name="mrp"
                                value={mrp}
                                className="form-control"
                                placeholder="$0"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Discount MRP*
                              </label>
                              <input
                                type="number"
                                onChange={(e) => onValueChange(e)}
                                name="discountmrp"
                                value={discountmrp}
                                className="form-control"
                                placeholder="$0"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Stock*</label>
                              <input
                                type="number"
                                onChange={(e) => onValueChange(e)}
                                name="stock"
                                value={stock}
                                className="form-control"
                                placeholder="0"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Status*</label>
                              <select
                                id="status"
                                onChange={(e) => onValueChange(e)}
                                name="status"
                                value={status}
                                class="form-control"
                              >
                                <option value=""></option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="form-label">Description*</label>
                              <div className="card card-editor">
                                <div className="content-editor">
                                  <textarea
                                    className="text-control"
                                    placeholder="Enter Description"
                                    onChange={(e) => onValueChange(e)}
                                    name="description"
                                    value={description}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                product Image*
                              </label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    onChange={(e) => handlePhoto(e)}
                                    name="prodFile"
                                  />
                                  <label
                                    className="custom-file-label"
                                    for="inputGroupFile04"
                                  >
                                    Choose Image
                                  </label>
                                </div>
                              </div>

                              <div className="add-cate-img">
                                <img
                                  src={
                                    "http://127.0.0.1:9002/public/product/" +
                                    product.image
                                  }
                                  alt=""
                                />

                                <div className="col-lg-12">
                                  <a
                                    style={deletebtpro}
                                    className="add-btn hover-btn"
                                    onClick={() => {
                                      deleteProductsImage(
                                        product._id,
                                        product.image
                                      );
                                    }}
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                            <button
                              className="save-btn hover-btn"
                              onClick={() => editProductDetails()}
                              type="button"
                            >
                              Add New Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProducts;
