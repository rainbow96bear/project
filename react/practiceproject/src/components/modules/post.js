const TYPE = {
  UPLOAD: "uploadPost",
};

const upload = (input) => ({
  type: TYPE.UPLOAD,
  payload: { input },
});
export const action = { upload };

export const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.UPLOAD:
      return [...state, payload.input];
    default:
      return state;
  }
};
