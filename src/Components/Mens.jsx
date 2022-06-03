import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from '../Styles/styles.module.css'
const Mens = () => {
  let [mensData,setMensData] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      let res = await fetch ("https://fakestoreapi.com/products/category/men's%20clothing");
      let data = await res.json();
      setMensData(data);
    }
    getData();
  },[]);

  return <div  className={styles.jewelery}>
    {mensData.map((el)=>{
      return <div key={el.id}>
      <img className={styles.jeweleryImg} src={el.image} alt="" />
      <p>{el.title}</p>
      <p>{el.category}</p>
      <p>${el.price}</p>
      <button style={{marginBottom:"20px"}}>Add To Cart</button>
    </div>;
    })}
  </div>;
};

export default Mens;
