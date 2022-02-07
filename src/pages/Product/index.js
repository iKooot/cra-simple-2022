import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product/product.state";
import { LightSection } from "../../components/Layouts";
import { Loader } from "../../components/UI";
import { ProductSection } from "../../components/ProductPage";
import { Error } from "../../components/Error";
import { productsActions } from "../../store/products/products.state";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);
  const { categories } = useSelector(
    (state) => state.products.productsCategory
  );

  useEffect(() => {
    if (!product) {
      dispatch(productActions.loadProduct(params.cardId));
    }
  }, [product]);

  useEffect(() => {
    if (!categories) {
      dispatch(productsActions.loadProductsCategory());
    }
  }, [categories]);

  return (
    <LightSection>
      {status === "loading" && <Loader />}
      {status === "success" && <ProductSection product={product} />}
      {status === "error" && <Error errorMessage={error} />}
    </LightSection>
  );
};

export default ProductPage;
