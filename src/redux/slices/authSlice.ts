import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  sub: number;
  user: string;
  iat: number;
};

type AuthState = {
  token: string;
  user: DecodedToken | null;
};

const initialState: AuthState = {
  token: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      try {
        const decodedToken = jwtDecode<DecodedToken>(action.payload.token);
        state.user = decodedToken;
      } catch (error) {
        console.log(error, "invalid token");
        state.user = null;
      }
    },
    logoutAuth: (state) => {
      state.token = "";
      state.user = null;
    },
  },
});

export const { loginAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;
