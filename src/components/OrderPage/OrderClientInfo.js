import React from "react";
import { InfoForm } from "../Forms/InfoForm";
import { useDispatch } from "react-redux";
import { setCustomerInfo } from "../../ducks/order.duck";

export function OrderClientInfo() {
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(setCustomerInfo(data));
  };

  return <InfoForm onSubmit={submitHandler} />;
}
