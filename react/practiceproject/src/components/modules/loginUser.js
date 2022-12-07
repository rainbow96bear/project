const TYPE = {
  LOGIN: "login",
  LOGOUT: "logout",
};

const login = (userId) => ({
  type: TYPE.LOGIN,
  payload: { userId },
});
const logout = () => ({
  type: TYPE.LOGOUT,
});

export const action = { login, logout };

export const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return { userId: payload.userId };
    case TYPE.LOGOUT:
      return {};
    default:
      return state;
  }
};
