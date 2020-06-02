import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the media state domain
 */

const selectMediaDomain = (state) => state.media || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Media
 */

const makeSelectMedia = () =>
  createSelector(selectMediaDomain, (substate) => substate);

export default makeSelectMedia;
export { selectMediaDomain };
