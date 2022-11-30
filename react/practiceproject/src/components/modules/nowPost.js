const TYPE = {
  SELECT: "selectPost",
};

const selectPost = (postObj) => ({
  type: TYPE.SELECT,
  payload: { postObj },
});

export const action = { selectPost };

export const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.SELECT:
      return payload.postObj;
    default:
      return state;
  }
};
