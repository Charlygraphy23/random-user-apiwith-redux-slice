import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://randomuser.me/api/";

export default axios;

export const getRandomUser = async (): Promise<AxiosResponse<
  any,
  any
> | void> => {
  return await axios.get(BASE_URL).catch((err) => console.error(err));
};
