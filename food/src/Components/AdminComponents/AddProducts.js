import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../Apis/api";
import { useEffect } from "react";
import { getCategory } from "../../Apis/api";
import { useParams } from "react-router-dom";

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

const AddProducts = () => {
  const { id } = useParams();

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

  // display data in dropdown function end

  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    //for multiple image uplode
    setProduct({ ...product, image: e.target.files[0] });
  };

  // add product function

  const addProductDetails = async () => {
    const formdatapro = new FormData();

    //use this foop for uplode multiple image
    //    for (var x = 0; x < image.length; x++) {
    // 	formdatapro.append("prodFile",product.image[x],product.image[x].name);
    // }
    //for image uplode   //append() method inserts a set of Node objects or DOMString objects after the last child of the Element

    formdatapro.append("prodFile", product.image, product.image.name);
    formdatapro.append("proname", product.proname);
    formdatapro.append("category", product.category);
    formdatapro.append("mrp", product.mrp);
    formdatapro.append("discountmrp", product.discountmrp);
    formdatapro.append("stock", product.stock);
    formdatapro.append("status", product.status);
    formdatapro.append("description", product.description);

    console.log(product);
    await addProduct(formdatapro);

    history.push("/allproducts");
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <form encType="multipart/form-data">
          <div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <main>
                <div className="container-fluid">
                  <h2 className="mt-30 page-title">Add Products</h2>
                  <ol className="breadcrumb mb-30">
                    <li className="breadcrumb-item">
                      {/* <a href="index.html">Dashboard</a> */}
                    </li>
                    {/* <li className="breadcrumb-item"> */}
                      {/* <a href="products.html">Products</a> */}
                    {/* </li> */}
                    {/* <li className="breadcrumb-item active">Add Product</li> */}
                  </ol>
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
                                <option value="select">select</option>

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
                            </div>
                            <button
                              className="save-btn hover-btn"
                              onClick={() => addProductDetails()}
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

export default AddProducts;
