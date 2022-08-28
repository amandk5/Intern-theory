export const REGISTER_USER = (fname, lastName, email, password) => {
  return {
    type: "REGISTER_USER",
    payload: {
      first_name: fname,
      last_name: lastName,
      email: email,
      password: password,
    },
  };
};
export const LOGIN_USER = (email, password) => {
  return {
    type: "LOGIN_USER",
    payload: {
      email: email,
      password: password,
    },
  };
};
