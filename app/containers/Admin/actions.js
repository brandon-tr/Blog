/*
 *
 * Admin actions
 *
 */

import { CHANGE_TITLE } from './constants';

export function changeTitle(data) {
  return {
    data,
    type: CHANGE_TITLE,
  };
}
