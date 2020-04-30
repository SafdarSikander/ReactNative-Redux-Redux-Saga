import {actionsGenerator} from '../utils/Actions';
const actions = {
  INCREMENT: actionsGenerator('INCREMENT'),
  DECREMENT: actionsGenerator('DECREMENT'),
};

module.exports = actions;
