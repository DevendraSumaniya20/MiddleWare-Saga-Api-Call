import createSagaMiddleware from '@redux-saga/core';

import {configureStore} from '@reduxjs/toolkit';

import ApiSlice from './ApiSlice';
import ApiSaga from './Saga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    Api: ApiSlice,
  },
  middleware: [saga],
});
saga.run(ApiSaga);

export default store;
