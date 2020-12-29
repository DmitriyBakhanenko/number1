import directoryActionTypes from './directory.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchDirectoryStart = () => ({
  type: directoryActionTypes.FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccess = (directoryMap: any) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directoryMap,
});

export const fetchDirectoryFailure = (errorMessage: string) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_FAILURE,
  payload: errorMessage,
});

export const fetchDirectoryStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection('sections');
    dispatch(fetchDirectoryStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchDirectorySuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchDirectoryFailure(err.message)));
  };
};
