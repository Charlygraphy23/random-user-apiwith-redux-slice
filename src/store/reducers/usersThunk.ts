import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomUser } from "../../api/index";

export const getUserThunk = createAsyncThunk("user/getUserThunk", async () => {
  return await getRandomUser();
});
