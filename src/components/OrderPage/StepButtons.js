import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import {
  nextStep,
  prevStep,
  selectOrder,
  setStepDone,
  clearOrder
} from "../../ducks/order.duck";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearCart } from '../../ducks/cart.duck'

export const StepButtons = () => {
  const dispatch = useDispatch();
  const { steps, activeStep, customerInfo } = useSelector(selectOrder);
  const { orderList } = useSelector(selectCart);


  const disabledButton = steps.reduce((acc, el) => {
    if (el.id === activeStep) {
      acc = el.done;
    }
    return acc;
  }, false);

  return (
    <ButtonGroup>
      {activeStep !== 0 && activeStep !== steps.length - 1 && (
        <Button
          onClick={() => {
            dispatch(prevStep());
          }}
        >
          Prev
        </Button>
      )}
      {activeStep !== steps.length - 1 && (
        <Button
          variant="contained"
          disabled={!disabledButton}
          onClick={() => {
            if (activeStep !== steps.length - 2) {
              dispatch(nextStep());
            }
            if (activeStep === steps.length - 2) {
              dispatch(clearCart())
              dispatch(clearOrder())
              console.log(customerInfo, orderList)
            }
          }}
        >
          {activeStep !== steps.length - 2 ? "Next" : "Submit"}
        </Button>
      )}
      {activeStep !== steps.length - 1 && (
        <Button
          onClick={() => {
            dispatch(setStepDone({ stepId: activeStep }));
          }}
        >
          Confirm information
        </Button>
      )}
    </ButtonGroup>
  );
};
