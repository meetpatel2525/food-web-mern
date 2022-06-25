import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { editCategory, getCategory, deleteImage } from "../../Apis/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const initialValue = {
  name: "",
  status: "",
  image: "",
  description: "",
};

const deletebt = {
  margin: "-20px 00px 00px 80px",
  color: "#FFFFFF",
};

const EditCategories = () => {
  const [category, setCategory] = useState(initialValue);
  // const [selectFile, setSelectFile] = useState('');
  const { name, status, image, description } = category;

  const { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    //lode data
    loadCategoryData();
  }, []);

  //for lode the data in edit page

  const loadCategoryData = async () => {
    const response = await getCategory(id);
    console.log(response.data);
    setCategory(response.data);
  };

  //edit data
  const editCategoryDetails = async () => {
    //for image
    const formdata = new FormData();

    if (category.newimage) {
      //for image uplode   //append() method inserts a set of Node objects or DOMString objects after the last child of the Element

      formdata.append("myFile", category.newimage, category.newimage.name);
    }
    formdata.append("name", category.name);
    formdata.append("status", category.status);
    formdata.append("description", category.description);

    await editCategory(id, formdata);

    history.push("/allcategory");
  };

  //for data
  const onValueChange = (e) => {
    console.log(e.target.value);
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  //for image
  const handlePhoto = (e) => {
    //for single image uplode
    console.log(e.target.files[0]);
    setCategory({ ...category, newimage: e.target.files[0] });
  };

  //delete single image only

  const deleteCategoryImage = async (id, category) => {
    await deleteImage(id, category); //id hold the id of category and category holde the image

    //for refresh the page
    window.location.reload(false);
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <form encType="multipart/form-data">
              <main>
                <div className="container-fluid">
                  <h2 className="mt-30 page-title">Edit Categories</h2>
                  {/* <ol className="breadcrumb mb-30">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="category.html">Categories</a>
                    </li>
                    <li className="breadcrumb-item active">Add Category</li>
                  </ol> */}
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="card card-static-2 mb-30">
                        <div className="card-title-2">
                          <h4>edit Category</h4>
                        </div>
                        <div className="card-body-table">
                          <div className="news-content-right pd-20">
                            <div className="form-group">
                              <label className="form-label">Name*</label>
                              <input
                                onChange={(e) => onValueChange(e)}
                                name="name"
                                value={name}
                                type="text"
                                className="form-control"
                                placeholder="Category Name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Status*</label>
                              <select
                                id="status"
                                onChange={(e) => onValueChange(e)}
                                name="status"
                                value={status}
                                className="form-control"
                              >
                                <option value=""></option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Category Image*
                              </label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    onChange={(e) => handlePhoto(e)}
                                    name="myFile"
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
                                    "http://127.0.0.1:9002/public/images/" +
                                    category.image
                                  }
                                  alt=""
                                />

                                <div className="col-lg-12">
                                  <a
                                    style={deletebt}
                                    className="add-btn hover-btn"
                                    onClick={() => {
                                      deleteCategoryImage(
                                        category._id,
                                        category.image
                                      );
                                    }}
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
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
                            <button
                              className="save-btn hover-btn"
                              onClick={() => editCategoryDetails()}
                              type="button"
                            >
                              edit Category
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategories;
