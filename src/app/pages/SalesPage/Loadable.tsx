/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const SalesPage = lazyLoad(
  () => import('./index'),
  module => module.SalesPage
);
