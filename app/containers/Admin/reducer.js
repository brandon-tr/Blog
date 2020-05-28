/*
 *
 * Admin reducer
 *
 */
import produce from 'immer';
import { CHANGE_TITLE } from './constants';

export const initialState = { title: 'Admin Menu' };

/* eslint-disable default-case, no-param-reassign */
const adminReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CHANGE_TITLE:
        state = action.data;
        break;
    }
    return state;
  });

export default adminReducer;
