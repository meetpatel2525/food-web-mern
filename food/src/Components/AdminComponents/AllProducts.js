import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProducts, deleteProducts } from "../../Apis/api";
import { TextField } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../../Apis/api";
import { deleteSingle } from "../../Apis/api";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

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

const addbtn = {

  margin: "0px 0px 0px 0px",
  textDecoration: "none" 
  // width: "80%",
  // height: "60%",

};

const searchbox = {

  margin: "0px 0px 0px -10px",
}

const style1 = {
  width: "8%",
};

const style2 = {
  width: "10%",
};

const style3 = {
  width: "10%",
};

const style4 = {
  width: "10%",
};

const style5 = {
  width: "10%",
};

const style6 = {
  width: "10%",
};

const style7 = {
  width: "10%",
};

const style8 = {
  width: "10%",
};


const AllProducts = () => {
  const [product, setProduct] = useState(initialValue);

  const {
    proname,
    category,
    mrp,
    discountmrp,
    stock,
    status,
    descriptionimage,
  } = product;

  //variable for serching
  const [search, setSearch] = useState("");

  //variable for displayy all data
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  //variable for serching

  const query = useQuery();
  const history = useHistory();
  const searchQuery = query.get("searchQuery");
  //for display data on page lode
  useEffect(() => {
    getAllProducts();
  }, []);

  //function of display all data
  const getAllProducts = async () => {
    let response = await getProducts();

    setProducts(response.data);
  };

  //for delete selected multiple data

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

  //variable for selecte  datas for delete multiple
  const [selectedRows, setSelectedRows] = useState([]);

  const deleteProductsData = async () => {
    let arrayidspro = [];
    selectedRows.forEach((user) => {
      if (selectedRows) {
        arrayidspro.push(user.id);
      }
    });
    {
      await deleteProducts(arrayidspro);
      // getAllProducts();
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
      await searchProducts({ search });

      const response = await searchProducts({ search });

      console.log(response);

      //hear we use data.data becouse over data is in the data
      let show = response.data.data;

      //reson whay we use same state setUsers for two things allusers and serched data  :- hear we set the serched user data in users that also have a data of all users but we put sem state setUsers becouse when this method is call than users satae  only map the serched users data only and if this method is not active than it display or map allusers data as auseal
      setProducts(show);

      console.log(show);
    } else {
      history.push("/allproducts");
    }
  };

  // delete single data from databise

  const deleteSingleData = async (id) => {
    await deleteSingle(id);
    getAllProducts();

    //this is use for refresh the page  after delete opration is perform
    window.location.reload(false);
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h2 className="mt-30 page-title">Products</h2>
                {/* <ol className="breadcrumb mb-30">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
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
                            deleteProductsData();
                          }}
                        >
                          Delete
                        </a>

                        <div className="card-title-2">
                        <h4><b>multiple Delete</b> </h4>
                        </div>
                        <div  className="search-by-name-input">
                      <Link
                      style={addbtn} 
                      to="/addproduct"
                      className="next-btn16 hover-btn"
                    >
                      Add New
                    </Link>
                      </div>

                        <div  className="search-by-name-input">
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
                              <th style={style1}><b>select</b></th>
                                <th style={style2}> <b>ID</b></th>
                                <th style={style3}><b>Image</b> </th>
                                <th style={style4}><b>Name</b></th>
                                <th style={style5}><b>mrp</b> </th>
                                <th style={style6}><b>Stock</b></th>
                                <th style={style7}><b>Status</b> </th>
                                <th style={style8}><b>Action</b> </th>
                              </tr>
                            </thead>
                            <tbody>
                              {products.map((pro) => (
                                <tr key={pro.id}>
                                  <td>
                                    <input
                                      type="checkbox"
                                      className="check-item"
                                      name="ids[]"
                                      value={pro._id}
                                      //for select the value of  cheked fild from table
                                      onChange={(e) => onValueChecked(e)}
                                    />
                                  </td>
                                  <td>{pro._id}</td>
                                  <td>
                                    <div className="cate-img">
                                      <img
                                        src={
                                          "http://127.0.0.1:9002/public/product/" +
                                          pro.image
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </td>
                                  <td>{pro.proname}</td>
                                  <td>{pro.mrp}</td>
                                  <td>{pro.stock}</td>
                                  <td>
                                    <span className="badge-item badge-status">
                                      {pro.status}
                                    </span>
                                  </td>
                                  <td className="action-btns">
                                    <Link
                                      type="button"
                                      className="view-shop-btn"
                                      onClick={() => deleteSingleData(pro._id)}
                                    >
                                      {<RiDeleteBin5Line />}
                                    </Link>

                                    <Link
                                      to={`/editproduct/${pro._id}`}
                                      className="edit-btn"
                                      title="Edit"
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

export default AllProducts;
