import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.value += action.payload;
      } else {
        state.value += 1;
      }
    },
    decrement: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.value -= action.payload;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
