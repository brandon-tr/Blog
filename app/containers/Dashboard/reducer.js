/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import { GET_STATS_SUCCESS } from './constants';

export const initialState = {
  users: 0,
  post: 0,
  comments: 0,
};
/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_STATS_SUCCESS:
        if (action.data) {
          draft.users = action.data.user;
          draft.post = action.data.post;
          draft.comments = action.data.comment;
        }
        break;
      default:
        break;
    }
  });

export default dashboardReducer;
