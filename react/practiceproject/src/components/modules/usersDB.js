const TYPE = {
  REGIST: "regist",
};

const regist = (id, pw, name, email) => ({
  type: TYPE.REGIST,
  payload: { id: id, pw: pw, name: name, email: email },
});

export const action = { regist };

export const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      return [...state, payload];
    default:
      return state;
  }
};
