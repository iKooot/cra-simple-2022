import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import {
  nextStep,
  prevStep,
  selectOrder, setStepDone,
} from "../../ducks/order.duck";
import { useDispatch, useSelector } from "react-redux";

export const StepButtons = () => {
  const dispatch = useDispatch();
  const { steps, activeStep } = useSelector(selectOrder);

  const disabledButton = steps.reduce((acc, el) => {
    if (el.id === activeStep) {
      acc = el.done;
    }
    return acc;
  }, false);
  return (
    <ButtonGroup>
      {activeStep !== steps.length - 1 && (
        <Button
          variant="contained"
          disabled={!disabledButton}
          onClick={() => {
            dispatch(nextStep());
          }}
        >
          {activeStep !== steps.length - 2 ? "Next" : "Submit"}
        </Button>
      )}
      {activeStep !== 0 && (
        <Button
          onClick={() => {
            dispatch(prevStep());
          }}
        >
          Prev
        </Button>
      )}
      <Button
          onClick={() => {
            dispatch(setStepDone({ stepId: activeStep }));
          }}
      >
        Confirm information
      </Button>
    </ButtonGroup>
  );
};
