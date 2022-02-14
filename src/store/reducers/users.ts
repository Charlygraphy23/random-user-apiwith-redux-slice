import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getUserThunk } from "./usersThunk";
import UserDetailsType from "../../interfaces/user";

type InitialStatType = {
  user: UserDetailsType | null;
  loading: boolean;
};

const initialState: InitialStatType = {
  user: null,
  loading: false
};
// @ts-ignore
const radomUserReducer: any = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserThunk?.pending.type]: (state: any) => {
      state.loading = true;
    },
    [getUserThunk?.fulfilled.type]: (
      state: any,
      actions: PayloadAction<AxiosResponse>
    ) => {
      const { data } = actions.payload;
      state.loading = false;
      state.user = data?.results[0];
    }
  }
});

export default radomUserReducer.reducer;
// export const { add } = radomUserReducer.actions;
