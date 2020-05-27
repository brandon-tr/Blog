/*
 *
 * Register actions
 *
 */
import { REGISTER } from './constants';

export function register(data) {
  return {
    type: REGISTER,
    data,
  };
}
