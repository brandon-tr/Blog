import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the posts state domain
 */

const selectPostsDomain = (state) => state.posts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Posts
 */

const makeSelectPosts = () =>
  createSelector(selectPostsDomain, (substate) => substate);

export default makeSelectPosts;
export { selectPostsDomain };
