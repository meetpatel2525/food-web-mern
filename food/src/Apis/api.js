import axios from "axios";

//databise link
const CategoryUrl = "http://localhost:9002";

//for display all category data
export const getCategory = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/allcategorydata/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

// for add data
export const addCategory = async (formdata) => {
  return await axios.post(`${CategoryUrl}/addcategory`, formdata);
};

// for edit category
export const editCategory = async (id, formdata) => {
  return await axios.put(`${CategoryUrl}/editcat/${id}`, formdata);
};

//multiple delete category data api using array

export const deleteCategory = async (arrayids) => {
  return await axios.delete(`${CategoryUrl}/deletecats/${arrayids}`);
};

//  delete single image  from category
export const deleteImage = async (id, category) => {
  return await axios.post(`${CategoryUrl}/deletecategoryimage`, {
    id: id,
    image: category,
  });
};

//for serching category
export const searchCategory = async (searchQuery) => {
  console.log(searchQuery.search);
  return await axios.get(
    `${CategoryUrl}/searchcategory?searchQuery=${searchQuery.search || "none"}`
  );
};

// for add product
export const addProduct = async (formdatapro) => {
  return await axios.post(`${CategoryUrl}/addproducts`, formdatapro);
};

//for display all products data
export const getProducts = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/allproductdata/${id}`);
};
//multiple delete in products
export const deleteProducts = async (arrayidspro) => {
  return await axios.delete(`${CategoryUrl}/deletepro/${arrayidspro}`);
};

//for serching products
export const searchProducts = async (searchQuery) => {
  return await axios.get(
    `${CategoryUrl}/search?searchQuery=${searchQuery.search || "none"}`
  );
};

// for edit data of product
export const editProduct = async (id, formdatapro) => {
  return await axios.put(`${CategoryUrl}/${id}`, formdatapro);
};

//  delete single image
export const deleteProductImage = async (id, product) => {
  return await axios.post(`${CategoryUrl}/deleteimage`, {
    id: id,
    image: product,
  });
};

//single delete of category
export const deleteSinglecat = async (id) => {
  return await axios.delete(`${CategoryUrl}/deletesincat/${id}`);
};

//single delete of products
export const deleteSingle = async (id) => {
  return await axios.delete(`${CategoryUrl}/${id}`);
};

// all producs after click on image  search url
export const searchproductofcategory = async (searchQuery, page) => {
  return await axios.get(
    `${CategoryUrl}/catproductlists?searchQuery=${searchQuery.name}&page=${page.page}`
  );
};

export const viewsinglepro = async (searchSInglepro) => {
  return await axios.get(
    `${CategoryUrl}/singlepro?searchSInglepro=${searchSInglepro.id}`
  );
};

//for display all orders data
export const getOrders = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/allorders/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

//hear is the api for fatch the data in view model of order products
export const viewPro = async (id) => {
  return await axios.get(`${CategoryUrl}/view/${id}`);
};

export const getMyOrders = async (id) => {
  return await axios.get(`${CategoryUrl}/myorder/${id}`);
};

// for add product to cart
//  export const addtocart = async () => {
//      console.log("api hello");
//     return await axios.post(`${CategoryUrl}/cart` );
//    }

//for display all cart data
export const getCart = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/allcart/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

// for edit data of product
export const updateqty = async (id, getCdata) => {
  return await axios.post(`${CategoryUrl}/updateqty/${id}`, getCdata);
};

//single delete of products
export const cartDeletePro = async (custid, id) => {
  return await axios.post(`${CategoryUrl}/deletecartpro`, {
    u_id: custid,
    _id: id,
  });
};

// address
export const addressofcust = async (datas) => {
  return await axios.post(`${CategoryUrl}/useraddress`, datas);
};

// get adress of user
export const getAdress = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/alladress/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

// get adress of user
export const updateStaus = async (id, logs) => {
  id = id || "";
  return await axios.post(`${CategoryUrl}/updatesatatus/${id}`, logs); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

// lodeedit data

export const geteditadrs = async (id) => {
  id = id || "";
  return await axios.get(`${CategoryUrl}/geteditadrs/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};

// for edit data of perticuler user address
export const editadres = async (id, formdata) => {
  return await axios.put(`${CategoryUrl}/editadrs/${id}`, formdata);
};

// delete of user address
export const deleteadrs = async (id) => {
  return await axios.delete(`${CategoryUrl}/deleteadrs/${id}`);
};

// genrateOtp

export const genrateOtp = async (id) => {
  id = id || "";
  return await axios.post(`${CategoryUrl}/otpgenrate/${id}`); //i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both
};
