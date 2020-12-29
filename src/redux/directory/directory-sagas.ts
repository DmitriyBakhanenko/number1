import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  fetchDirectoryFailure,
  fetchDirectorySuccess,
} from './directory.actions';
import directoryActionTypes from './directory.types';

export function* fetchDirectoryStartAsync() {
  try {
    const directoryRef = firestore.collection('sections');
    const snapshot = yield directoryRef.get();
    const directoryMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchDirectorySuccess(directoryMap));
  } catch (error) {
    yield put(fetchDirectoryFailure(error.message));
  }
}

export function* fetchDirectoryStart() {
  yield takeLatest(
    directoryActionTypes.FETCH_DIRECTORY_START,
    fetchDirectoryStartAsync
  );
}

export function* directorySagas() {
  yield all([call(fetchDirectoryStart)]);
}
