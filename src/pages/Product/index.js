import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { loadProduct, selectProduct } from "../../ducks/product.duck";
import { LightSection } from "../../components/Layouts";
import { Loader } from "../../components/UI";
import { ProductSection } from "../../components/ProductPage";
import { Error } from "../../components/Error";
import { selectProducts, loadProductsCategory } from "../../ducks/products.duck";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector(selectProduct);
  const { categories } = useSelector(selectProducts);

  useEffect(() => {
    if (!product) {
      dispatch(loadProduct(params.cardId));
    }
  }, [product]);

  useEffect(() => {
    if (!categories) {
      dispatch(loadProductsCategory());
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
