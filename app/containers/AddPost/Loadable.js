/**
 *
 * Asynchronously loads the component for AddPost
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
