import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInFailure,
  signInSucces,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';
import userActionsTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth: any) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, null);
    const userSnapShot = yield userRef.get();
    yield put(signInSucces({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
    alert(error.message);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error.message);
  }
}

interface payload {
  email: string;
  password: string;
}

export function* signInWithEmailAndPassword({ email, password }: payload) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error.message);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error.message);
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
    alert(error.message);
  }
}
export function* signUp(data: any) {
  try {
    const {
      payload: { email, password, displayName },
    } = data;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess());
    yield signInWithEmailAndPassword(data);
  } catch (error) {
    yield put(signUpFailure(error));
    alert(error.message);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    userActionsTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionsTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionsTypes.SIGN_OUT_START, signOut);
}
export function* onSignUpStart() {
  yield takeLatest(userActionsTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
