"use client"
import { useEffect,useState } from "react";
import Link from "next/link";
import Button1 from "../product-with-second-method/button";
export default function index(){
    const [product,setProduct]=useState([])
    const fetchdata=async()=>{
            let data = await fetch('https://dummyjson.com/products');
            data = await data.json();
            setProduct(data.products);
        }
    useEffect(()=>{
        fetchdata()
    },[])
    return (<div>
    <Link href="/"><p>Back</p></Link>
    <h1>Products</h1>
    {
        product.map((item,index)=>(
            <div>
            <p key={index}>Name : {item.title}</p>
            <Button1 price={item.price}  />
            </div>
        ))
    }
    </div>)
}