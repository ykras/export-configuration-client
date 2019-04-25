'use strict';

import fetchMock from 'fetch-mock';

export const testErrorRejection = ({path, method = 'GET', fun}) => {
  const codes = [
    {status: 300, text: 'Multiple Choices'},
    {status: 400, text: 'Bad Request'},
    {status: 500, text: 'Internal Server Error'}
  ];
  return codes.reduce((p, {status, text}) => (
    p.then(() => {
      fetchMock.restore().mock(path, status, {method});
      return fun()
        .catch(error => {
          expect(error.message).toEqual(text);
        });
    })
  ), Promise.resolve());
};
