import * as actions from '../constants/actionsTypes';

const actionsCreator = {
  increment: (payload) => ({type: actions.INCREMENT.REQUEST, payload}),
  decrement: (payload) => ({type: actions.DECREMENT.REQUEST, payload}),
};

module.exports = actionsCreator;
