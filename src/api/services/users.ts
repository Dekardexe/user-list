import axios from "axios";
import { BASE_URL, REQUEST_TIMEOUT, USERS } from "../../utils/constants";
import { User } from "../../utils/types";

export const getUsers = async (usersLimit?: number) => {
  const response = await axios.get<User[]>(`${BASE_URL}/${USERS}`, {
    params: {
      limit: usersLimit,
    },
    timeout: REQUEST_TIMEOUT,
  });
  return response.data;
};
