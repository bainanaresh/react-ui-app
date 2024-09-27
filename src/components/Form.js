import { useState } from "react";

function Form({showForm,closeForm,initialFormdata,addProduct}){

    const [product,setProduct]=useState(initialFormdata);

    let setFormdata=(e)=>{

        const {name,value}=e.target
        setProduct({...product,[name]:value})
        console.log(product)
       
    }
    return(
        <>
        <div className="form-overlay">
            <form>
                
                <div className="form-group"> 
                    <label>ProductId :</label>
                    <input className="form-control mt-2" type="text" name="id" value={product.id} placeholder="Enter Id"  onChange={setFormdata}/>
                </div>

                <div className="form-group"> 
                    <label>ProductName :</label>
                    <input className="form-control mt-2" type="text" name="name" value={product.name} placeholder="Enter Product Name" onChange={setFormdata}/>
                </div>

                <div className="form-group"> 
                    <label>Price :</label>
                    <input className="form-control mt-2" type="number" name="price" value={product.cost} placeholder="Enter cost"  onChange={setFormdata}/>
                </div>

                <div className="form-group"> 
                    <label>Company :</label>
                    <input className="form-control mt-2" type="text" name="company" value={product.company} placeholder="Enter company"  onChange={setFormdata}/>
                </div>

                <div className="form-group"> 
                    <label>category :</label>
                    <select className="form-control mt-2" name="category" value={product.category} placeholder="EnterCategory"  onChange={setFormdata}>
                        <option value='-1'></option>
                        <option value={'mobile'}>Mobile</option>
                        <option value={'laptop'}>Laptop</option>
                        <option value={'tv'}>TV</option>

                    </select>
                </div>

                <button className="btn btn-primary float-end" onClick={(e)=>
                    {
                        e.preventDefault();
                        addProduct(product)
                        closeForm();

                    }
                }>Save</button>
                <button className="btn btn-danger float-end" onClick={(e)=>
                    {
                        e.preventDefault();
                        closeForm();

                    }
                }>Cancel</button>

            </form>
        </div>
        </>
    )
}

export default Form;