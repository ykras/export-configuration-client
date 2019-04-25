'use strict';

import errors from './errorTypes';
import localizedStrings from '../localization';

export const requestErrorMessage = requestError =>
  requestError.message === errors.FailedToFetch ? localizedStrings.LoadingError : localizedStrings.UnknownNetworkError;
