import React from "react";
import { useState, useEffect } from "react";
import { getCategory, deleteCategory, searchCategory } from "../../Apis/api";
import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { deleteSinglecat } from "../../Apis/api";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

//for use search query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialValue = {
  name: "",
  status: "",
  image: "",
  description: "",
};

const addbtn = {
  margin: "0px 0px 0px 0px",
  textDecoration: "none",
  // height: "60%",
};

const searchbox = {
  margin: "0px 0px 0px -10px",
};

const hed = {
  width: "100%",

  // height: "60%",
};

const stst = {
  width: "10%",
  // height: "60%",
};

// const mystatus = {

//   width: "130px%",
//   // height: "60%",
// };

const action = {
  width: "8%",
  // height: "60%",
};

const table = {
  width: "100%",
  height: "100%",
};

// const searchbtn = {
//   margin: "-50px 0px 40px 1700px",
//    height: "42px",
// };
const deletebt = {
  color: "#FFFFFF",
};

const style1 = {
  width: "2%",
};
const style2 = {
  width: "4%",
};

const style3 = {
  width: "6%",
};

const style4 = {
  width: "7%",
};
const style5 = {
  width: "8%",
};

const style6 = {
  width: "10%",
};

const style7 = {
  width: "10%",
};

const AllCategory = () => {
  const [category, setCategory] = useState(initialValue);
  //  const [selectFile, setSelectFile] = useState('');
  const { name, status, image, description } = category;

  // const classes = useStyles();
  const { id } = useParams();

  const query = useQuery();

  const history = useHistory();

  const searchQuery = query.get("searchQuery");

  //variable for displayy all data
  const [categorys, setCategorys] = useState([]);

  //variable for serching
  const [search, setSearch] = useState("");

  //for display data on page lode
  useEffect(() => {
    getAllCategory();
  }, []);

  //function of display all data

  const getAllCategory = async () => {
    let response = await getCategory();

    setCategorys(response.data);
    console.log(categorys);
  };

  //for delete selected multiple data

  //variable for selecte  datas for delete multiple
  const [selectedRows, setSelectedRows] = useState([]);

  const onValueChecked = (e) => {
    //check check box check or uncheck
    let ischecked = e.target.checked;

    //check if chekbox is checked or uncheck
    if (ischecked) {
      setSelectedRows([...selectedRows, { id: e.target.value }]);
      //if checkbox uncheck than run else
    } else {
      let value = e.target.value;
      console.log(value);
      setSelectedRows(selectedRows.filter((t) => t.id !== value));
    }
  };

  //delete multiple data
  const deleteCategoryData = async () => {
    let arrayids = [];
    selectedRows.forEach((user) => {
      if (selectedRows) {
        arrayids.push(user.id);
      }
    });
    {
      await deleteCategory(arrayids);
      console.log(arrayids);
      getAllCategory();
      setSelectedRows("");
    }
    //for refresh the page becose it select tha chekbox automatecly after multiple delete opration
    window.location.reload(false);
  };

  //search  logic start

  //for serch button click
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //meaning of this if is enter//

      //when serch button is click than the serch logis is active
      searchMyData();
    }
  };

  // main search logic
  const searchMyData = async () => {
    if (search.trim()) {
      //trime() is for no empty space
      await searchCategory({ search });

      const response = await searchCategory({ search });

      //hear we use data.data becouse over data is in the data
      let show = response.data.data;

      //reson whay we use same state setUsers for two things allusers and serched data  :- hear we set the serched user data in users that also have a data of all users but we put sem state setUsers becouse when this method is call than users satae  only map the serched users data only and if this method is not active than it display or map allusers data as auseal
      setCategorys(show);
    } else {
      history.push("/allcategory");
    }
  };

  // delete single data from databise
  const deleteSingleDatacat = async (id) => {
    await deleteSinglecat(id);
    console.log(id);
    getAllCategory();
    window.location.reload(false);
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h2 className="mt-30 page-title">Categories</h2>
                {/* <ol className="breadcrumb mb-30">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Categories</li>
                </ol> */}
                <div className="row justify-content-between">
                  {/* <div className="col-lg-12">
                    <Link
                      to="/addproduct"
                      style={{ textDecoration: "none" }}
                      className="add-btn hover-btn"
                    >
                      Add New
                    </Link>
                  </div> */}
                  <div className="col-lg-12 col-md-12">
                    <div className="card card-static-2 mt-30 mb-30">
                      <div className="d-flex justify-content-between alignn-items-center my-4 mx-3">
                        <a
                          className="add-btn hover-btn text-white"
                          onClick={() => {
                            deleteCategoryData();
                          }}
                        >
                          Delete
                        </a>

                        <div className="card-title-2">
                          <h4>
                            <b>multiple Delete</b>{" "}
                          </h4>
                        </div>

                        <div className="search-by-name-input">
                          <Link
                            style={addbtn}
                            to="/addcategory"
                            className="next-btn16 hover-btn"
                          >
                            Add New
                          </Link>
                        </div>

                        <div className="search-by-name-input">
                          <TextField
                            style={searchbox}
                            name="search"
                            onKeyPress={handleKeyPress}
                            variant="outlined"
                            label="Search users"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            // startIcon={ <SearchIcon />}
                          />
                        </div>
                        <button
                          className="next-btn16 hover-btn"
                          onClick={searchMyData}
                          type="submit"
                        >
                          Search
                        </button>
                        {/* <button  className="add-btn hover-btn"  > search</button> */}
                      </div>
                      <div className="card-body-table">
                        <div className="table-responsive">
                          <table className="table ucp-table table-hover">
                            <thead>
                              <tr>
                                <th style={style1}>
                                  <b>select</b>
                                </th>
                                <th style={style2}>
                                  {" "}
                                  <b>ID</b>
                                </th>
                                <th style={style3}>
                                  <b>Image</b>{" "}
                                </th>
                                <th style={style4}>
                                  <b>Name</b>
                                </th>
                                <th style={style5}>
                                  {" "}
                                  <b>Description</b>
                                </th>
                                <th style={style6}>
                                  <b>Status</b>{" "}
                                </th>
                                <th style={style7}>
                                  <b>Action</b>{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* map the data for display all new added data  */}
                              {categorys.map((cat) => (
                                <tr key={cat.id}>
                                  <td>
                                    <input
                                      type="checkbox"
                                      className="check-item"
                                      name="ids[]"
                                      value={cat._id}
                                      //for select the value of  cheked fild from table
                                      onChange={(e) => onValueChecked(e)}
                                    />
                                  </td>
                                  <td>{cat._id}</td>
                                  <td>
                                    <div className="cate-img">
                                      <img
                                        src={
                                          "http://127.0.0.1:9002/public/images/" +
                                          cat.image
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </td>
                                  <td>{cat.name}</td>
                                  <td>{cat.description}</td>
                                  <td style={stst}>
                                    <span className="badge-item badge-status">
                                      {cat.status}
                                    </span>
                                  </td>

                                  <td style={action} className="action-btns">
                                    <Link
                                      type="button"
                                      className="view-shop-btn"
                                      onClick={() =>
                                        deleteSingleDatacat(cat._id)
                                      }
                                    >
                                      {<RiDeleteBin5Line />}
                                    </Link>

                                    <Link
                                      to={`/editctegory/${cat._id}`}
                                      className="edit-btn"
                                    >
                                      {<AiOutlineEdit />}
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategory;
