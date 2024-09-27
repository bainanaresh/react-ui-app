import React from 'react';
import { Table } from 'antd';

const ProductListt=({products,deleteData,editProduct})=>{

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          
        },
        {
          title: 'Name',
          dataIndex: 'name',
          
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'category',
          },

          {
            title: 'Company',
            dataIndex: 'company',
          },

          {
            title: 'Edit',
            dataIndex:'edit',
            //render: () => <button className="btn btn-primary" onClick={()=>editProduct(data)}>edit</button>,
          },
          {
            title: 'Delete',
            dataIndex:'delete',
            //render: () => <button className="btn btn-danger" onClick={()=>deleteData(data.id)}>delete</button>,
          },
      ];

      const dataa = [];
      products.map(
        (data)=>(
            dataa.push({
                key: data.id,
                id: data.id,
                name: data.name,
                price:data.price,
                category:data.category,
                company:data.company,
                edit: <button className="btn btn-primary" onClick={()=>editProduct(data)}>edit</button>,
                delete: <button className="btn btn-danger" onClick={()=>deleteData(data.id)}>delete</button>,
              })
         ))
      
    return(   
        <div>
        <div style={{
        marginTop:"20px",
        marginLeft:"50px",
        marginRight:"50px"
    }}>
   <Table
    columns={columns}
    dataSource={dataa}
    pagination={{
      pageSize: 5,
    }}
    scroll={{
      y: 240,
    }}
  />
        </div>
        </div>
    );
}
    
export default ProductListt;
