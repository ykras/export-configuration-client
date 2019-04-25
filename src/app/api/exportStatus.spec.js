'use strict';

// import fetchMock from 'fetch-mock';
// import exportTypes from './exportTypes';
// import {testErrorRejection} from './testUtils';
//
// describe('exportTypes api', () => {
//   const dummyExportType1 = {id: '1', name: 'export 1'};
//   const dummyExportType2 = {id: '2', name: 'export 2'};
//   const dummyResponse = [dummyExportType1, dummyExportType2];
//
//   afterEach(() => {
//     fetchMock.restore();
//   });
//
//   it('readExportTypes method should return exportTypes and exportTypeIds', done => {
//     fetchMock.mock('/api/exportTypes', dummyResponse);
//     exportTypes.readExportTypes()
//       .then(({exportTypes, ids}) => {
//         const expectedExportTypes = {
//           [dummyExportType1.id]: dummyExportType1,
//           [dummyExportType2.id]: dummyExportType2
//         };
//         const expectedExportTypeIds = [dummyExportType1.id, dummyExportType2.id];
//         expect(exportTypes).toEqual(expectedExportTypes);
//         expect(ids).toEqual(expectedExportTypeIds);
//         done();
//       });
//   });
//
//   it('readExportTypes method gets rejected with an error containing the status text if the status is not 2xx', done => {
//     testErrorRejection({
//       path: '/api/exportTypes',
//       fun: () => exportTypes.readExportTypes()
//     })
//       .then(() => done());
//   });
// });
