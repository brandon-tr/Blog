import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the comments state domain
 */

const selectCommentsDomain = (state) => state.comments || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Comments
 */

const makeSelectComments = () =>
  createSelector(selectCommentsDomain, (substate) => substate);

export default makeSelectComments;
export { selectCommentsDomain };
