import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { selectOrder } from "../../ducks/order.duck";
import { useSelector } from "react-redux";

export const OrderStepper = () => {
  const { steps, activeStep } = useSelector(selectOrder);

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.name}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
