import React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


import { Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../redux/action/basketAction";

const ProductCard = ({image,title,price,category,description}) => {

  const dispatch=useDispatch()
  const basketItems=useSelector(state=>state.basket);
  console.log(basketItems);



  const handleProduct=()=>{
    dispatch(addBasket({image,description,title,category,price}))
    


  }
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {title}
          </Typography>
          <Typography>{price} $</Typography>
        </CardContent>
        <CardActions >
          <Typography>
            {category}
          </Typography>
          <IconButton aria-label="share">
            <ShoppingCartIcon onClick={handleProduct} />
          </IconButton>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;