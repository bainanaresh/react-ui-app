const ProductList=({products,deleteData,editProduct})=>{
return(
    <>
    <div>
        <table className="table m-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Category</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(
                       (data)=>(
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.cost}</td>
                        <td>{data.category}</td>
                        <td><button className="btn btn-primary" onClick={()=>editProduct(data)}>edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteData(data.id)}>delete</button></td>
                    </tr>
                       )
                    )
                }
            </tbody>
        </table>
    </div>
    </>
);
}

export default ProductList;