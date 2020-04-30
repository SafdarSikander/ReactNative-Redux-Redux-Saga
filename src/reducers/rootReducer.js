import * as actions from '../constants/actionsTypes';

const initialState = {
  count: 10,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.INCREMENT.SUCCESS:
      return {
        ...state,
        count: state.count + payload.count,
      };
    case actions.DECREMENT.SUCCESS:
      return {
        ...state,
        count: state.count - payload.count,
      };
    default:
      return state;
  }
};
