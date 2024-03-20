import Button1 from "./button";

async function productLists(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}
export default async function index(){
    let product = await productLists();
    return (<>
        <div>
            <h3>Product with second Method</h3>
            {
                product.map((item,index)=>(
                   <div>
                     <p>Name : {item.title}</p>
            <Button1 price={item.price}/>
                    
                   </div>
                ))
            }
        </div>
    </>)
}