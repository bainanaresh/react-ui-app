import React from "react";
import ProductListt from "./ProductListt";

import { useEffect, useState } from 'react';
import "../index.css"
import { deleteProduct, getProductsData, postData, updateData } from "./api";
import Form from "./Form";

const Dashboardd=()=>{

    const [products,setProducts]=useState([])

    const [openForm,setOpenForm] =useState(false)

    const [edit,setEdit]= useState(false)

    const [initialFormdata,setInitialFormdata]=useState({id:'',name:'',price:'',company:'',category:''})
    
    useEffect(()=>{
        getData()
    },[])

    const showForm=()=>{
        setInitialFormdata({
            id:'',
            name:'',
            price:'',
            company:'',
            category:''
        })
        setOpenForm(true);
        setEdit(false)
    }

    const closeForm=()=>{
        setOpenForm(false);
    }

    const getData=async ()=>{
        const response=await  getProductsData();
        console.log(response.data)
        setProducts(response.data);
    }

    const deleteData=async (id)=>{

       let response=await deleteProduct(id)
       console.log(response.data)
       getData();
    }

    const addProduct=async (data)=>{
        let response;
        if(edit){
            response=await updateData(data,data.id) 
        }else{
            response=await postData(data)
        }
        console.log(response.data)
        getData();

    }

    const editProduct=(data)=>{

        setEdit(true)
        setOpenForm(true)
        setInitialFormdata(data)

    }



    return(
        <>
        <div className="wrapper ">
        <div className="addproduct">
        <h2 className="text-primary">crud application</h2>
        <button className="btn btn-primary" onClick={showForm}>addProduct</button>
        <ProductListt products={products} deleteData={deleteData} editProduct={editProduct}></ProductListt>
        {
            openForm && <Form showForm={showForm} closeForm={closeForm} initialFormdata={initialFormdata} addProduct={addProduct}></Form>
        }
        </div>
        </div>
        </>
    );
}
export default Dashboardd;