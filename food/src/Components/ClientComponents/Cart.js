// for only local storage data

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getCart } from '../../Apis/api';
// import Cookies from 'js-cookie';
// import { useParams } from 'react-router-dom';
// const style1  ={

//     width: '80%',

// };

// const style2  ={
// 	// marginTop:'10%',
// 	margin: '8% 5% 5% 30%',
// };

// const Cart = () => {

// 	let list = window.localStorage.getItem("productlist");
// 	let data = list == null ? [] : JSON.parse(list);

// // login customer data
// const customerr = Cookies.get("customerr");

//   //for display cart data from databise
//     useEffect(() => {
// 	getcartdata();

//   }, []);

// const [getCdata, setGEtCdata] = useState([]);
// // function of display all data

// const getcartdata = async () => {

// 	//if user is log in than api call

// 	if(customerr){

// 	var  user = JSON.parse(customerr);

// 	let response = await getCart(user._id);

// 	// setGEtCdata(response.data);

// 	const newItem = response.data.map(x=>x.products)
// 	// (newItem[0]);
// 	setGEtCdata(newItem[0]);
// }

// }

// // console.log(getCdata);

//   // console.log(getCdata[0].products);
//  //delete all product

//     const deleteproduct=(id)=>{
//     const filteredProducts=data.filter((item,index)=>{
//     return item._id !== id
//     })
// 	localStorage.setItem("productlist", JSON.stringify(filteredProducts));
//     window.location.reload();
// }

// // let [cartDb, setCartDb] = useState(getCdata);
// let [cart, setCart] = useState(data);

// // cart = getCdata
// // console.log({cart,getCdata});
// // console.log(cartDb);
// // console.log(getCdata);
// // (3) [{…}, {…}, {…}]

// //function increse product in cart and local storage
// const increment = (pro,id)=>{
// //logic of add unique id and incrise when add butern more than one times

//    const productExist = cart.find((item)=> item._id === pro._id);
//    if(productExist){
// 	   setCart(cart.map((item)=>
// 	   item._id === pro._id

// 	   ?  {...productExist,qty:productExist.qty+1}
// 	   :item
// 	   )
// 	   );
// 	//   window.location.reload();
//    }

//    else {
// 		   alert("---------------------- error ----------------- ")

// // console.log("else");
// // 	   setCart([...cart,{...pro,qty:1}])

//    }

// 	   }

// // function for  decrement product in cart and local storage

// const   decrement = (pro,id)=>{

// 	//logic of decrement unique id
// 		   const productExist = cart.find((item)=> item._id === pro._id);
// 	//condition of remove product when decrise from 0 quntity
// 		   if(productExist.qty === 1){
// 		   setCart(cart.filter((item)=> item._id !== pro._id ));
// 		   window.location.reload();
// 	   }else {
// 		//if its more than 1 than its decrement by -1
// 		setCart(cart.map((item)=> item._id === pro._id ? {...productExist,  qty:productExist.qty-1}
// 	    :item
// 		   )

// 		   );

// 	   }

// 		   }

//    useEffect(()=>{
// 		localStorage.setItem('productlist',JSON.stringify(cart));

// 		},[cart])

// // for total

// const totalSaving = cart.reduce((mrp,item) => mrp + item.qty * item.mrp, 0)

// const total = cart.reduce((discountmrp,item) => discountmrp + item.qty * item.discountmrp, 0)

// 	return (

// 	<>

// {/* <!-- Cart Sidebar Offset Start--> */}
// <div className="wrapper">

// 	<div style={style1} >
//     <div  style={style2} className=" ">
// 		<div  className=" side-cart-header p-3 ">
// 			<div className="d-inline-block  main-cart-title">My Cart <span>({cart.length})</span></div>
// 			{/* <button type="button" className="bs-canvas-close close" aria-label="Close"><i className="uil uil-multiply"></i></button> */}
// 		</div>
// 		<div className="">
// 			<div className="cart-top-total">
// 				<div className="cart-total-dil">
// 					<h4>Gambo Super Market</h4>
// 					<span>$34</span>
// 				</div>
// 				<div className="cart-total-dil pt-2">
// 					<h4>Delivery Charges</h4>
// 					<span>$1</span>
// 				</div>
// 			</div>

// 			{
// 				cart.map((pro)=>(

// 			<div className="side-cart-items">
// 				<div className="cart-item">
// 					<div className="cart-product-img">
// 						<img  src={ "http://127.0.0.1:9002/public/product/"+pro.image} alt=""/>
// 						<div className="offer-badge">6% OFF</div>
// 					</div>
// 					<div className="cart-text">
// 						<h4>{pro.proname}</h4>
// 						<div className="cart-radio">
// 							<ul className="kggrm-now">
// 								<li>
// 									<input type="radio" id="a1" name="cart1"/>
// 									<label htmlFor="a1">0.50</label>
// 								</li>
// 								<li>
// 									<input type="radio" id="a2" name="cart1"/>
// 									<label htmlFor="a2">1kg</label>
// 								</li>
// 								<li>
// 									<input type="radio" id="a3" name="cart1"/>
// 									<label htmlFor="a3">2kg</label>
// 								</li>
// 								<li>
// 									<input type="radio" id="a4" name="cart1"/>
// 									<label htmlFor="a4">3kg</label>
// 								</li>
// 							</ul>
// 						</div>
// 						<div className="qty-group">
// 						<div>

// 			</div>

// 			{/* onClick={()=> handelRemove(pro)} */}

// 							<div className="quantity buttons_added">
// 								<input type="button" onClick={()=>decrement(pro)}  defaultValue="-" className="minus minus-btn"/>
// 								<input type="input"  value={pro.qty}  name="quantity" className="input-text qty text"/>
// 								<input type="button" onClick={()=>increment(pro)}  defaultValue="+" className="plus plus-btn"/>
// 							</div>
// 							<div className="cart-item-price">${pro.discountmrp*pro.qty} <span>${pro.mrp*pro.qty}</span></div>

// 						</div>

// 						<button type="button" onClick={()=>deleteproduct(pro._id)}  className="cart-close-btn"><i className="uil uil-multiply"></i></button>
// 					</div>

// 				</div>

// 			</div>
// 			))}
// 		</div>
// 		<div className="cart-top-total">
// 			<div className="cart-total-dil saving-total ">
// 				<h4>Total Saving</h4>
// 				<span>${totalSaving}</span>
// 			</div>
// 			<div className="main-total-cart">
// 				<h2>Total</h2>
// 				<span>${total}</span>
// 			</div>
// 			<div className="checkout-cart">
// 				<a href="#" className="promo-code">Have a promocode?</a>
// 				<Link  style={{ textDecoration: 'none' }} to="/processtoplaceorder" className="cart-checkout-btn hover-btn">Proceed for place order</Link>
// 			</div>
// 		</div>
// 	</div>
//     </div>

// 	{/* <!-- Cart Sidebar Offsetl End--> */}
// </div>
//     </>
//   )
// }

// export default Cart;

//manage local storage and databaise cart togather

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCart } from "../../Apis/api";
import Cookies from "js-cookie";
import { updateqty } from "../../Apis/api";
import { useParams } from "react-router-dom";
import { SettingsBackupRestore } from "@material-ui/icons";
import { cartDeletePro } from "../../Apis/api";
import axios from "axios";
const style1 = {
  width: "80%",
};

const style2 = {
  // marginTop:'10%',
  margin: "8% 5% 5% 30%",
};

const Cart = () => {
  // login customer data
  const customerr = Cookies.get("customerr");

  //for display cart data from databise
  useEffect(() => {
    getcartdata();
  }, []);

  let list = window.localStorage.getItem("productlist");
  // let newdata = [[...getCdata,...list]]
  let data = list == null ? [] : JSON.parse(list);

  const [getCdata, setGEtCdata] = useState(customerr ? [] : data);

  //get all products
  const getcartdata = async () => {
    //if user is log in than api call
    if (customerr) {
      var user = JSON.parse(customerr);

      let response = await getCart(user._id);

	  // setGEtCdata(response.data);

      const newItem = response.data.map((x) => x.products);
      // console.log(newItem[0]);
      setGEtCdata(newItem[0]);
	}
  };

  //removie froduct from the cart
  
  const deleteproduct = async (id) => {
    console.log(id);
    if (customerr) {
      var cust = JSON.parse(customerr);

      await cartDeletePro(cust._id, id);
      window.location.reload();
    } else {
    }

    const filteredProducts = getCdata.filter((item, index) => {
      return item._id !== id;
    });

    localStorage.setItem("productlist", JSON.stringify(filteredProducts));

    window.location.reload();
  };

  //increment qty

  const increment = async (pro, id) => {

    //logic of add unique id and incrise when add butern more than one times

    const productExist = getCdata.find((item) => item._id === pro._id);
    console.log(productExist);
    if (productExist) {
      let updatetedqty = getCdata.map((item) =>
        item._id === pro._id
          ? { ...productExist, qty: productExist.qty + 1 }
          : item
      );

      console.log(updatetedqty);

      if (customerr) {
        console.log("if");
        var cust = JSON.parse(customerr);
        await updateqty(cust._id, updatetedqty);
        setGEtCdata(updatetedqty);

        window.location.reload();
      } else {
        console.log("else");
        console.log(updatetedqty);
        localStorage.setItem("productlist", JSON.stringify(updatetedqty));

        window.location.reload();
      
	}
    }
  };

  // function for  decrement product in cart and local storage

  const decrement = async (pro, id) => {
    // if(customerr){

    //logic of decrement unique id
    const productExist = getCdata.find((item) => item._id === pro._id);
    //condition of remove product when decrise from 0 quntity
    if (productExist.qty === 1) {
      //for qty stope _ at 1
      let updatetedqty = getCdata.map((item) =>
        item._id === pro._id ? { ...productExist, qty: productExist.qty } : item
      );
    } else {
      //if its more than 1 than its decrement by -1
      let updatetedqty = getCdata.map((item) =>
        item._id === pro._id
          ? { ...productExist, qty: productExist.qty - 1 }
          : item
      );

      if (customerr) {
        var cust = JSON.parse(customerr);
        await updateqty(cust._id, updatetedqty);
        setGEtCdata(updatetedqty);
        window.location.reload();
      } else {
        localStorage.setItem("productlist", JSON.stringify(updatetedqty));
        window.location.reload();
      }
    }
  };

  //    useEffect(()=>{

  // 		localStorage.setItem('productlist',JSON.stringify(getCdata));

  // 		},[getCdata])

  // for total

  const totalSaving = getCdata.reduce(
    (mrp, item) => mrp + item.qty * item.mrp,
    0
  );

  const total = getCdata.reduce(
    (discountmrp, item) => discountmrp + item.qty * item.discountmrp,
    0
  );

  return (
    <>
      {/* <!-- Cart Sidebar Offset Start--> */}
      <div className="wrapper">
        <div style={style1}>
          <div style={style2} className=" ">
            <div className=" side-cart-header p-3 ">
              <div className="d-inline-block  main-cart-title">
                My Cart <span>({getCdata.length})</span>
              </div>
              {/* <button type="button" className="bs-canvas-close close" aria-label="Close"><i className="uil uil-multiply"></i></button> */}
            </div>
            <div className="">
              <div className="cart-top-total">
                <div className="cart-total-dil">
                  <h4>Gambo Super Market</h4>
                  <span>$34</span>
                </div>
                <div className="cart-total-dil pt-2">
                  <h4>Delivery Charges</h4>
                  <span>$1</span>
                </div>
              </div>

              {getCdata.map((pro) => (
                <div key={pro.id} className="side-cart-items">
                  <div className="cart-item">
                    <div className="cart-product-img">
                      <img
                        src={
                          "http://127.0.0.1:9002/public/product/" + pro.image
                        }
                        alt=""
                      />
                      <div className="offer-badge">6% OFF</div>
                    </div>
                    <div className="cart-text">
                      <h4>{pro.proname}</h4>
                      <div className="cart-radio">
                        <ul className="kggrm-now">
                          <li>
                            <input type="radio" id="a1" name="cart1" />
                            <label htmlFor="a1">0.50</label>
                          </li>
                          <li>
                            <input type="radio" id="a2" name="cart1" />
                            <label htmlFor="a2">1kg</label>
                          </li>
                          <li>
                            <input type="radio" id="a3" name="cart1" />
                            <label htmlFor="a3">2kg</label>
                          </li>
                          <li>
                            <input type="radio" id="a4" name="cart1" />
                            <label htmlFor="a4">3kg</label>
                          </li>
                        </ul>
                      </div>
                      <div className="qty-group">
                        <div></div>

                        {/* onClick={()=> handelRemove(pro)} */}

                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            onClick={() => decrement(pro)}
                            defaultValue="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="input"
                            value={pro.qty}
                            name="quantity"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            onClick={() => increment(pro)}
                            defaultValue="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <div className="cart-item-price">
                          ${pro.discountmrp * pro.qty}{" "}
                          <span>${pro.mrp * pro.qty}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => deleteproduct(pro._id)}
                        className="cart-close-btn"
                      >
                        <i className="uil uil-multiply"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-top-total">
              <div className="cart-total-dil saving-total ">
                <h4>Total Saving</h4>
                <span>${totalSaving}</span>
              </div>
              <div className="main-total-cart">
                <h2>Total</h2>
                <span>${total}</span>
              </div>
              <div className="checkout-cart">
                <a href="#" className="promo-code">
                  Have a promocode?
                </a>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/processtoplaceorder"
                  className="cart-checkout-btn hover-btn"
                >
                  Proceed for place order
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Cart Sidebar Offsetl End--> */}
      </div>
    </>
  );
};

export default Cart;
