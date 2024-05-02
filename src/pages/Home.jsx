import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const getProduct = async () => {
    try {
      const URL = `https://fakestoreapi.com/products `;
      const res = await axios(URL);
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [category]);

  const filterProduct = () => {
    if (category === "") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };



  return (
    <div>
     
      <button onClick={()=> setCategory("")}>ALL</button>
      <button onClick={()=> setCategory("electronics")}>ELECTRONİCS</button>
      <button onClick={()=> setCategory("jewelery")} >JEWELERY</button>
      <button onClick={()=> setCategory("men's clothing")}>MEN</button>
      <button onClick={()=> setCategory("women's clothing")}>WOMEN</button>

      <Box>
        {filterProduct().map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Box>
    </div>
  );
};

export default Home;


// const [category, setCategory] = useState([]);
// setCategory(["all", ...data]);
// {category.map((cat) => (
//         <button key={cat} onClick={() => setCategory(cat)}>{cat}</button>     ))}