import axios from 'axios'

const url="http://localhost:9191/api";

export async function  getProductsData(){
    
    return await  axios.get(`${url}/products`);
}

export async function deleteProduct(id){
    return await axios.delete(`${url}/delete/${id}`)
}

export async function postData(data){

    return await axios.post(`${url}/add`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    }
        
    )
}

export async function updateData(data,id){

    return await axios.put(`${url}/update/${id}`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    }
        
    )
}