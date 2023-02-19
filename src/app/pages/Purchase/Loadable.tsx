/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PurchasePage = lazyLoad(
  () => import('./index'),
  module => module.PurchasePage
);
