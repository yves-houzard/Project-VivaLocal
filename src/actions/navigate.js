/* eslint-disable import/prefer-default-export */

import { navigateT } from '../action-types';

export const actionGoToDefault = () => ({
  type: navigateT.GO_TO_DEFAULT,
});

export const actionGoToSearchPage = () => ({
  type: navigateT.SEARCH_PAGE,
});

export const actionCheckAccess = () => ({
  type: navigateT.CHECK_ACCESS,
});
