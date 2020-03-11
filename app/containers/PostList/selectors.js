import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postList state domain
 */

const selectPostListDomain = state => state.postList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostList
 */

const makeSelectPostList = () =>
  createSelector(
    selectPostListDomain,
    substate => substate,
  );

export default makeSelectPostList;
export { selectPostListDomain };
