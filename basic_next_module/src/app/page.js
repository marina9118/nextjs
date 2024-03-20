'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [name,setName] = useState("Mayesha")
  let data = "Ruby"
  const getButtonValue = () =>{
    console.log("You clicked on button");
  }
  const getFruitName = (fruit) => {
    console.log(fruit);
  }
  const getStateName = () =>{
    setName("Ashmi")
  }
  const getVarName = () =>{
    data = "Riya";
  }
  const ChildComponent = () =>{
    return(
     
      <>
        <h1>Hello I am Inner Component</h1>
      </>
   
    )
  }
  return (
    <main className={styles.main}>
      <h2><User/></h2>
      <p>Hello World {name}</p>
      <p><About name="Me"/> {data}</p>
      <p><Contact name="Mini" email="mini@gmail.com"/></p>
      <button onClick={()=>{alert('Hello Next JS')}}>Click me callback</button>
      <button onClick={getButtonValue}>Click me By function </button>
      <button onClick={()=>getFruitName("Grapes")}>Click me By function with arguments</button>
      <button onClick={()=>getVarName()}>Click me for variable change</button>
      <button onClick={()=>getStateName()}>Click me for state change</button>
      <ChildComponent />
      {ChildComponent()}
    </main>
  );
}


const User =()=>{
  return "Marina";
}

const About =(props)=>{
  return props.name;
}
const Contact =(props)=>{
  const {name,email}=props;
  return "name "+name+" email "+email;
}