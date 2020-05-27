/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import axios from 'axios';
import { REGISTER } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case REGISTER:
        axios
          .post('/register', action.data)
          .then(function (response) {
            state = response;
          })
          .catch(function (error) {
            state = error.response.data.message;
          });
        break;
    }
  });

export default registerReducer;
