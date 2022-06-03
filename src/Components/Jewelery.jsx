import React, { useContext } from "react";
import { AuthContext } from "../Contex/AuthContex";
import styles from '../Styles/styles.module.css'
const Jewelery = () => {
  const { jewelery } = useContext(AuthContext);
  console.log(jewelery);
  return (
    <div className={styles.jewelery}>
      {jewelery.map((el) => {
        console.log(el);
        return <div key={el.id}>
          <img className={styles.jeweleryImg} src={el.image} alt="" />
          <p>{el.title}</p>
          <p>{el.category}</p>
          <p>${el.price}</p>
          <button style={{marginBottom:"20px"}}>Add To Cart</button>
        </div>;
      })}
    </div>
  );
};

export default Jewelery;
