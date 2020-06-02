import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addPost state domain
 */

const selectAddPostDomain = (state) => state.addPost || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddPost
 */

const makeSelectAddPost = () =>
  createSelector(selectAddPostDomain, (substate) => substate);

export default makeSelectAddPost;
export { selectAddPostDomain };
