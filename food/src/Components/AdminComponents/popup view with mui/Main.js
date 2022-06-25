import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrders } from '../../Apis/api';
import { Typography,Box, Modal,InputLabel } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import { viewPro } from '../../Apis/api';

// for view module

// const initialValue = {

    // u_id:'',
	// order_id:'',
	// proname:'',
	// qty:'',
	// discountmrp:'',
	// totalprice:'',
	
    // dplace: '',
 
    // phone: '',
	// flatno: '',
	// address:'',
	// pincode:'',
    // city:'',
    // payment:'',
	// prodata:''


// }


const popup = {
	height: '100%',
	width: '100%',
	color:"#94a3b8",
	// position: 'absolute',
	// top: 0,
	// left: 0,
	backgroundcolor: '#202020',
	// display: 'none'
  };

  const tital0 = {
	// margin: '1000px 1000px 0px 100px',
  };

  const tital1 = {
	// margin: '0px 0px 0px 200px',
  };

const style = {
	color:"#94a3b8",
	borderRadius: '5px',
    backgroundColor: ' #202020 ',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
	height :'auto',
    bgcolor: 'background.paper',
    border: '1px solid #202020',
    boxShadow: 24,
    p: 4,
  };
  const Main = () => {

    const style1 = {
                width:'200px',
              };
              const style2 = {
                width:'130px',
              };
              const style3 = {
                width:'130px',
              };
              const style4 = {
                width:'300px',
              };
              const style5 = {
                width:'130px',
              };
              const style6 = {
                width:'130px',
              };
              const style7 = {
                width:'100px',
              };

			  const { id } = useParams();




			//for display products in  view data store 
			  const [myProData,setMyProData]= useState([]);  


// fordisplay order data
	 const [orders, setOrders] = useState([]);

		useEffect(() => {
        
			getAllOrderData();
		
        }, []);

//function of display all data   of orders

    const 	getAllOrderData = async () => {

	let response = await getOrders();
	
	setOrders(response.data);
}		



      //hear is the function for view-model of orderproducts

		  const viewProData = async(id) => {  		
			
		  let  newData = await viewPro(id);

		//   const data = newData.data.reduce((discountmrp,item) =>  discountmrp + item.qty *  item.discountmrp )

      	// console.log(data);
		//chnage index of the array for show the data 
			setMyProData(newData.data.odrdata); 

		  }
			
	       //hear end the coped edit component code we copy for view 
		   //this is  the variable for open and close the model-view 
		   const [open, setOpen] = useState(false);
		   const handleOpen = () => setOpen(true);
		   const handleClose = () => setOpen(false);


//for vuew model show the total of the all products of a perticuler orderid or perticuler customer click my admin in the view 
		let price =	myProData.reduce((sum, i) => (

			sum += i.qty * i.discountmrp
		  ), 0)
		  
		  console.log(price);

    return (

<div>

<div className="sb-nav-fixed">

<div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Dashboard</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>

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
										<a href="orders.html" className="view-btn hover-btn">View All</a> 
									</div>
									<div className="card-body-table">
										<div className="table-responsive">
											<table className="table ucp-table table-hover">
												<thead>
													<tr>
                                                    <th style={style1}>Order ID</th>
														<th style={style2}>products</th>
														<th style={style3}>Date</th>
														<th style={style4} >Address</th>
														<th style={style5}>Status</th>
														<th style={style6}>Total</th>
														<th style={style7}>Action</th>
													</tr>
												</thead>
												<tbody >

												{
													orders.map((ord)=>
												
												
													<tr key={ord.id} >
											
														<td>{ord._id}</td>
														<td>
														<a  className="views-btn"><i onClick={(e) => handleOpen(viewProData(ord._id))} className="fas fa-eye"></i></a>


														{/* <Button  className="views-btn"  startIcon={<BiShowAlt/>}>view</Button> */}

														</td>
														<td>
															<span className="delivery-time">{ord.createdAt}</span>
															{/* <span className="delivery-time">4:00PM - 6.00PM</span> */}
														</td>
														<td> {ord.flatno}, {ord.address},{ord.city}, {ord.pincode}</td>
														<td>
															<span className="badge-item badge-status">Pending</span>
														</td>

														<td>{ord.totalprice+ord.delevrycharge}</td>
														
														<td className="action-btns">
															{/* <a href="order_view.html" className="views-btn"><i className="fas fa-eye"></i></a> */}
															{/* <a href="order_edit.html" className="edit-btn"><i className="fas fa-edit"></i></a> */}
														</td>
													</tr>
													)}
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




	<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

     {/* hear is the box for display the data  things you want  */}
        <Box sx={style}>

<Typography>
{/* display the multiple image so we use mapling same  as abow in display all image on table */}
 

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
												</thead>


 {/* map the data of orderproducts>  */}
{
		
		myProData.map((e) =>   	
														
													
	
	
										
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
													</tr>
													{/* <td>	meet</td> */}
												</tbody>	
)} 

<td style={tital0}><b>total</b></td>  
<td style={tital1} ><b>{price}</b></td>

                  		{/* <span className="delivery-time"> </span> */}
</table>
</div>
										</div>

  </Typography> 

        </Box>
      </Modal>

		</div>

        </div>
        </div>


    )
}

export default Main
