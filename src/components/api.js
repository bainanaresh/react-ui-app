import axios from 'axios'
import { getToken } from './authServiceApi';

const url="http://localhost:9191/api";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

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