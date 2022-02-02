import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product/product.state";
import { LightSection } from "../../components/Layouts";

const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    if (!product) {
      dispatch(productActions.loadProduct(params.cardId));
    }
  }, [product]);

  return (
    <LightSection>
      <Typography mb={10} variant="h1" component="h1">
        {product?.title}
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/catalog");
        }}
      >
        Go to catalog
      </Button>
    </LightSection>
  );
};

export default ProductPage;
