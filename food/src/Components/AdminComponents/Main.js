import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { editadres, getOrders } from "../../Apis/api";
import { getAdress } from "../../Apis/api";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { viewPro } from "../../Apis/api";

// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { updateStaus } from "../../Apis/api";
import { ArrowDropUpSharp } from "@material-ui/icons";
// for edit status

const initialValue = {
  statuslog: "",

  status: "",
};

const popup = {
  height: "100%",
  width: "100%",
  color: "#202020",
  // position: 'absolute',
  // top: 0,
  // left: 0,
  // backgroundcolor: '#94a3b8',
  // display: 'none'
};

const tital0 = {
  // margin: '1000px 1000px 0px 100px',
};

const tital1 = {
  // margin: '0px 0px 0px 200px',
};

// const style = {
// 	color:"#94a3b8",
// 	borderRadius: '5px',
//     backgroundColor: ' #202020 ',
//     color: 'white',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 'auto',
// 	height :'auto',
//     bgcolor: 'background.paper',
//     border: '1px solid #202020',
//     boxShadow: 24,
//     p: 4,
//   };

const Main = () => {
  const select = {
    margin: "-5px 0px 0px -30px",
    height: "100%",
    width: "100%",
    // color:"#202020",
  };

  const selectbtn = {
    margin: "-80px 0px 30px 130px",
    width: "30px",
    height: "40px",
    Radius: "5px",
  };

  const style1 = {
    width: "200px",
  };
  const style2 = {
    width: "130px",
  };
  const style3 = {
    width: "130px",
  };
  const style4 = {
    width: "300px",
  };
  const style5 = {
    width: "130px",
  };
  const style6 = {
    // margin: '0px 0px 0px 120px',
    width: "130px",
  };
  const style7 = {
    width: "100px",

    margin: "0px 0px 0px 130px",
  };

  //edit the adress of user

  // const edit = async () => {

  // 	const adrs = aaddress

  // 	setAdrs(...adrs,{u_address:aaddress})

  // 	if(adrs === "adrs"){
  // 	await editadres(id,adrs)

  //   }else{

  // 		const editeddata = adrs
  // 		await editadres(adrs)
  // 	}
  // }

  const { id } = useParams();

  //for display products in  view data store
  const [myProData, setMyProData] = useState([]);

  // fordisplay order data
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrderData();
  }, []);

  //function of display all data   of orders

  const getAllOrderData = async () => {
    let response = await getOrders();
    setOrders(response.data);

    // let myadress = await getAdress(orders.adrs_id);
    // console.log(myadress);
  };
  // console.log(myadress);
  console.log(orders);
  //hear is the function for view-model of orderproducts

  const viewProData = async (id) => {
    let newData = await viewPro(id);

    //   const data = newData.data.reduce((discountmrp,item) =>  discountmrp + item.qty *  item.discountmrp )

    //chnage index of the array for show the data

    setMyProData(newData.data.odrdata);
  };

  //hear end the coped edit component code we copy for view
  //this is  the variable for open and close the model-view
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for vuew model show the total of the all products of a perticuler orderid or perticuler customer click my admin in the view
  let price = myProData.reduce((sum, i) => (sum += i.qty * i.discountmrp), 0);

  console.log(price);

  const [statos, setStatos] = useState(initialValue);

  const { statuslog, status } = statos;

  const statusChange = (e) => {
    // setProduct
    setStatos({ [e.target.name]: e.target.value });
  };

  //edit the status

  const editstatus = async (id) => {
    //for get curent time and date at edit
    let time = new Date().toLocaleString();

    var logs = { ...statos, statuslog: time };

    if (logs.status) {
      await updateStaus(id, logs);
      window.location.reload(false);
    }
  };
  return (
    <div>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h2 className="mt-30 page-title"></h2>
                {/* <ol className="breadcrumb mb-30">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol> */}

                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="dashboard-report-card purple">
                      <div className="card-content">
                        <span className="card-title">Order Pending</span>
                        <span className="card-count">2</span>
                      </div>
                      <div className="card-media">
                        <i className="fab fa-rev"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="dashboard-report-card red">
                      <div className="card-content">
                        <span className="card-title">Order Cancel</span>
                        <span className="card-count">0</span>
                      </div>
                      <div className="card-media">
                        <i className="far fa-times-circle"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="dashboard-report-card info">
                      <div className="card-content">
                        <span className="card-title">Order Process</span>
                        <span className="card-count">5</span>
                      </div>
                      <div className="card-media">
                        <i className="fas fa-sync-alt rpt_icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="dashboard-report-card success">
                      <div className="card-content">
                        <span className="card-title">Today Income</span>
                        <span className="card-count">$9568.00</span>
                      </div>
                      <div className="card-media">
                        <i className="fas fa-money-bill rpt_icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12">
                    <div className="card card-static-1 mb-30">
                      <div className="card-body">
                        <div id="earningGraph"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12">
                    <div className="card card-static-2 mb-30">
                      <div className="card-title-2">
                        <h4>Recent Orders</h4>
                      </div>
                      <div className="card-body-table">
                        <div className="table-responsive">
                          <table className="table ucp-table table-hover">
                            <thead>
                              <tr>
                                <th style={style1}><b> Order ID</b></th>
                                <th style={style2}><b>products</b></th>
                                <th style={style3}> <b>Date</b></th>
                                <th style={style4}><b>Address</b></th>
                                <th style={style5}><b>current Status</b></th>
                                <th style={style5}><b>Total</b></th>
                                {/* <th style={style6}></th> */}
                                <th style={style7}>change Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((ord) => (
                                <tr key={ord.id}>
                                  <td>{ord._id}</td>
                                  <td>
                                    <a
                                      className="views-btn"
                                      data-toggle="modal"
                                      data-target="#exampleModalCenter"
                                    >
                                      {" "}
                                      <i
                                        className="fas fa-eye"
                                        onClick={(e) =>
                                          handleOpen(viewProData(ord._id))
                                        }
                                      ></i>
                                    </a>
                                    {/* <a  className="views-btn"><i onClick={(e) => handleOpen(viewProData(ord._id))} className="fas fa-eye"></i></a> */}

                                    {/* <Button  className="views-btn"  startIcon={<BiShowAlt/>}>view</Button> */}
                                  </td>
                                  <td>
                                    <span className="delivery-time">
                                      {ord.createdAt}
                                    </span>
                                    {/* <span className="delivery-time">4:00PM - 6.00PM</span> */}
                                  </td>
                                  <td>
                                    {" "}
                                    {ord.flatno}, {ord.address},{ord.city},
                                    {ord.pincode}
                                  </td>

                                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
		onChange={(e) => statusChange(e)} 
		// value={status} 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="status"
        //   onChange={handleChange}
        >
          <MenuItem value="panding">panding</MenuItem>
          <MenuItem value="orderPlaced">orderPlaced</MenuItem>
          <MenuItem value="Packed">Packed</MenuItem>
		  <MenuItem value="Arrived">Arrived</MenuItem>
		  <MenuItem value="Delivered">Delivered</MenuItem>

        </Select> */}

                                  <td>
                                    <span className="badge-item badge-status">
                                      {ord.status}
                                    </span>
                                  </td>

                                  {/* <span className="badge-item badge-status">Pending</span> */}

                                  <td>{ord.totalprice + ord.delevrycharge}</td>

                                  <div style={select} className="form-group">
                                    <td>
                                      {/* <label className="form-label">Category*</label> */}

                                      <select
                                        onChange={(e) => statusChange(e)}
                                        name="status"
                                        className="badge-item badge-status"
                                      >
                                        <option value="panding">panding</option>
                                        <option value="Processing">
                                          Processing
                                        </option>
                                        <option value="packed">packed</option>
                                        {/* <option value="Packed">Packed</option> */}
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">
                                          Delivered
                                        </option>
                                        <option value="Cancelled">
                                          Cancelled
                                        </option>
                                      </select>

                                      {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close"/> */}
                                    </td>

                                    <div style={selectbtn}>
                                      <button
                                        className="save-btn hover-btn"
                                        onClick={() => editstatus(ord._id)}
                                        type="button"
                                      >
                                        Go
                                      </button>
                                    </div>

                                    {/* <div>
</div> */}
                                  </div>
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
        <div>
          {/* hear is the model start for display(and hear we use mui model) */}

          {/* <!-- Modal --> */}

          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    products data
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="">
                    <div className="">
                      <table style={popup} className="table">
                        <thead>
                          <tr>
                            <th>
                              <b>name</b>
                            </th>
                            <th>
                              <b>totalprice</b>
                            </th>
                            <th>
                              <b>basePrice</b>
                            </th>
                            <th>
                              <b>quantity</b>
                            </th>
                          </tr>
                        </thead>
                        {myProData.map((e) => (
                          <tbody key={e.id}>
                            <tr style={style1}>
                              <td> {e.proname}</td>

                              <td>{e.discountmrp * e.qty}</td>
                              <td> {e.discountmrp}</td>

                              <td>{e.qty}</td>

                              <td></td>
                            </tr>
                            {/* <td>	meet</td> */}
                          </tbody>
                        ))}

                        <td style={tital0}>
                          <b>total</b>
                        </td>
                        <td style={tital1}>
                          <b>{price}</b>
                        </td>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                </div>
              </div>
            </div>
          </div>

          {/* 

	<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}

          {/* hear is the box for display the data  things you want  */}
          {/* <Box sx={style}> */}

          {/* <Typography> */}
          {/* display the multiple image so we use mapling same  as abow in display all image on table */}

          {/* 
<div className="">
										<div className="">

										<table style={ popup} className="table">
												<thead>
													<tr>
                                                    <th ><b>name</b></th>
														<th ><b>totalprice</b></th>
														<th><b>basePrice</b></th>
														<th  ><b>quantity</b></th>
													</tr>
												</thead> */}

          {/* map the data of orderproducts>  */}
          {/* {
		
		myProData.map((e) =>   	 */}

          {/* 	
										
												<tbody key={e.id} >
										
													<tr style={style1} >
											
														<td>  {e.proname}</td>
													
														<td>
														{e.discountmrp * e.qty}
														</td>
														<td> {e.discountmrp}</td>

														<td>{ e.qty}</td>





													

														<td>
													
														</td>
													</tr> */}
          {/* <td>	meet</td> */}
          {/* </tbody>	 */}
          {/* )} 

<td style={tital0}><b>total</b></td>  
<td style={tital1} ><b>{price}</b></td> */}

          {/* <span className="delivery-time"> </span> */}
          {/* // </table> */}

          {/* </div> */}

          {/* //   </Typography>  */}

          {/* //         </Box> */}
          {/* </Modal> */}

          {/* // 		</div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
