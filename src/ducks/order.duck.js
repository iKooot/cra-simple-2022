import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    { id: 0, name: "Confirm chosen products", done: false },
    { id: 1, name: "Enter info", done: false },
    { id: 2, name: "Confirm order", done: false },
    { id: 3, name: "Finish", done: false },
  ],
  activeStep: 0,
  customerInfo: null,
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    nextStep(state) {
      if (state.activeStep === state.steps.length - 1) {
        state.activeStep = state.steps.length - 1
      } else {
        state.activeStep += 1
      }
    },
    prevStep(state) {
      if (state.activeStep === 0) {
        state.activeStep = 0
      } else {
        state.activeStep -= 1
      }
    },
    setStepDone(state, action) {
      const { stepId } = action.payload

      state.steps.forEach( step => {
        if (step.id === stepId) {
          step.done = true
        }
      })
    }
  },
});

const { reducer, actions } = slice;

export default reducer;

export const { nextStep, prevStep, setStepDone } = actions;

export const selectOrder = (state) => state.order;
