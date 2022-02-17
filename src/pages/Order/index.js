import React from "react";
import { Box } from "@mui/material";
import { LightSection } from "../../components/Layouts";
import {
  OrderClientInfo,
  OrderConfirmation,
  OrderFinishStep,
  OrderProducts,
  OrderStepper,
  StepButtons,
} from "../../components/OrderPage";
import { useSelector } from "react-redux";
import { selectOrder } from "../../ducks/order.duck";

const OrderPage = () => {
  const { activeStep } = useSelector(selectOrder);

  return (
    <LightSection>
      <OrderStepper />
      <Box marginY={5}>
        {activeStep === 0 && <OrderProducts />}
        {activeStep === 1 && <OrderClientInfo />}
        {activeStep === 2 && <OrderConfirmation />}
        {activeStep === 3 && <OrderFinishStep />}
      </Box>
      <StepButtons />
    </LightSection>
  );
};

export default OrderPage;
