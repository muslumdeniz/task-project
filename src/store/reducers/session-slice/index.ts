import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialSessionState } from "./_core";

const sessionSlice = createSlice({
  name: "session",
  initialState: initialSessionState,
  reducers: {
    addName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    addSurname(state, action: PayloadAction<string>) {
      state.surname = action.payload;
    },
  },
});

export const { addName, addSurname } = sessionSlice.actions;
export default sessionSlice.reducer;
