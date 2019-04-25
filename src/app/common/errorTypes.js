'use strict';

import keyMirror from 'keymirror';
import {merge} from 'lodash';

const networkErrors = {
  FailedToFetch: 'Failed to fetch'
};

const exportErrors = keyMirror({
  AuthenticationError: null,
  DataSendingError: null,
  IllegalCharactersInPath: null,
  WrongSubdirsFormat: null,
  UnexpectedImplementationError: null
});

export default merge(networkErrors, exportErrors);

