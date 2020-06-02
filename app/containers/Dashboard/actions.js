/*
 *
 * Dashboard actions
 *
 */

import { GET_STATS, GET_STATS_SUCCESS } from './constants';

export function getStatsDashboard() {
  return {
    type: GET_STATS,
  };
}

export function retrievedStatsDashboard(data) {
  return {
    type: GET_STATS_SUCCESS,
    data,
  };
}
