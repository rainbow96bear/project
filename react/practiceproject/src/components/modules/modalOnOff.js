const TYPE = {
  TOGGLE: "TOGGLE",
};

const modalToggle = () => ({
  type: TYPE.TOGGLE,
  payload: "",
});

export const action = { modalToggle };

export const reducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case TYPE.TOGGLE:
      return !state;
    default:
      return state;
  }
};
