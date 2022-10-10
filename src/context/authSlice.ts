import { AnyAction, createAsyncThunk, createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import { getRequest } from "../utils/dataSource";
import { User } from "./../models/User";
import { putRequest } from "./../utils/dataSource";

const defaultUser: User = {} as User;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    user: defaultUser,
    error: "",
    status: "",
  },
  reducers: {
    loginUser(state, action) {
      state.isLogged = true;
    },
    logoutUser(state, action) {
      state.isLogged = false;
    },
    loginAsDemoUser(state, action) {
      const userId = "1";
    },
  },
  extraReducers(builder: any) {
    builder
      .addCase(fetchUserById.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isLogged = true;
      })
      .addCase(fetchUserById.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state: any, action: any) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchUserById = createAsyncThunk("auth/fetchUserById", async (userId: string) => {
  const response = await getRequest(`users/${userId}`);
  return response.data;
});
export const updateUser = createAsyncThunk("auth/updateUser", async (user: User) => {
  const response = await putRequest(`users`, user);
  return response.data;
});
export type RootState = ReturnType<typeof authSlice.reducer>;
export type AuthThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const selectIsUserLogged = (state: any) => state.auth.isLogged;
export const selectcurrentUser = (state: any) => state.auth.user;
export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
