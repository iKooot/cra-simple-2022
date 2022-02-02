import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {productsActions} from "../store/products/products.state";

export function useGetProducts() {
    const dispatch = useDispatch();
    const productsState = useSelector( state => state.products)
    const { products } = useSelector((state) => state.products);

    useEffect(async () => {
        if (!products) {
            dispatch(productsActions.loadProducts());
        }
    }, [products]);

    return {...productsState}
}