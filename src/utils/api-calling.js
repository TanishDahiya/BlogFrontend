import { myAxios } from "./constants";

export const signupApi = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};
