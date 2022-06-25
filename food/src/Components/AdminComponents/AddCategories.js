import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addCategory } from "../../Apis/api";

const initialValue = {
  name: "",
  status: "",
  image: "",
  description: "",
};

const AddCategories = () => {
  const [category, setCategory] = useState(initialValue);
  // const [selectFile, setSelectFile] = useState('');
  const { name, status, image, description } = category;
  // const classes = useStyles();

  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    //for single image uplode
    console.log(e.target.files[0]);

    setCategory({ ...category, image: e.target.files[0] });
  };

  const addCategoryDetails = async () => {
    // console.log(category);
    //for image uplode   //append() method inserts a set of Node objects or DOMString objects after the last child of the Element
    // console.log('==',category.image,'==',category.name)
    const formdata = new FormData();
    formdata.append("myFile", category.image, category.image.name);
    formdata.append("name", category.name);
    formdata.append("status", category.status);
    formdata.append("description", category.description);

    await addCategory(formdata);

    history.push("/allcategory");
  };

  return (
    <>
      <div class="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <form encType="multipart/form-data">
              <main>
                <div class="container-fluid">
                  <h2 class="mt-30 page-title">Add Categories</h2>
                  <ol class="breadcrumb mb-30">
                    <li class="breadcrumb-item">
                      {/* <a href="index.html">Dashboard</a> */}
                    </li>
                    {/* <li class="breadcrumb-item"> */}
                      {/* <a href="category.html">Categories</a> */}
                    {/* </li> */}
                    {/* <li class="breadcrumb-item active">Add Category</li> */}
                  </ol>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="card card-static-2 mb-30">
                        <div class="card-title-2">
                          <h4>Add New Category</h4>
                        </div>
                        <div class="card-body-table">
                          <div class="news-content-right pd-20">
                            <div class="form-group">
                              <label class="form-label">Name*</label>
                              <input
                                onChange={(e) => onValueChange(e)}
                                name="name"
                                value={name}
                                type="text"
                                class="form-control"
                                placeholder="Category Name"
                              />
                            </div>
                            <div class="form-group">
                              <label class="form-label">Status*</label>
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
                            <div class="form-group">
                              <label class="form-label">Category Image*</label>
                              <div class="input-group">
                                <div class="custom-file">
                                  <input
                                    type="file"
                                    class="custom-file-input"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    onChange={(e) => handlePhoto(e)}
                                    name="myFile"
                                  />
                                  <label
                                    class="custom-file-label"
                                    for="inputGroupFile04"
                                  >
                                    Choose Image
                                  </label>
                                </div>
                              </div>
                              {/* <div class="add-cate-img">
													<img  alt=""/>
												</div> */}
                            </div>
                            <div class="form-group">
                              <label class="form-label">Description*</label>
                              <div class="card card-editor">
                                <div class="content-editor">
                                  <textarea
                                    class="text-control"
                                    placeholder="Enter Description"
                                    onChange={(e) => onValueChange(e)}
                                    name="description"
                                    value={description}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <button
                              class="save-btn hover-btn"
                              onClick={() => addCategoryDetails()}
                              type="button"
                            >
                              Add New Category
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

export default AddCategories;
