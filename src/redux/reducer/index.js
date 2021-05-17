import { GETDATA } from "../constant/index";

const rootReducer = (state = null, action) => {
  switch (action.type) {
    case GETDATA:
      return action.payload;
    default:
      return null;
  }
};

export default rootReducer;
