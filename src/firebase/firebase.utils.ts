import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-storage';

const config = {
  apiKey: 'AIzaSyC7Fxyktik-rtX4nXjklHGXukI-NRGu954',
  authDomain: 'eshop-number1.firebaseapp.com',
  projectId: 'eshop-number1',
  storageBucket: 'eshop-number1.appspot.com',
  messagingSenderId: '93698448492',
  appId: '1:93698448492:web:a668b7cc5973bba0090c49',
  measurementId: 'G-39DG6L3LWP',
};

export const uploadImage = (
  path: string,
  file: any,
  setStatus: any,
  setPercentage: any,
  setUrl: any
) => {
  if (!path || !file) return;
  const storageRef = storage.ref();
  const uploadTask = storageRef.child('images/sections/' + file.name).put(file);

  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    function (snapshot) {
      setStatus('Загрузка...');
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPercentage(Math.round(progress));
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          setStatus('Пауза...');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          setStatus('Загрузка...');
          break;
      }
    },
    function (error: any) {
      switch (error.code) {
        case 'storage/unauthorized':
          setStatus('Ошибка!');
          break;
        case 'storage/canceled':
          setStatus('Ошибка!');
          break;
        case 'storage/unknown':
          setStatus('Ошибка!');
          break;
        default:
          setStatus('Ошибка!');
          break;
      }
    },
    function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (url: any) {
        setUrl(url);
        setStatus('Загрузка завершена успешно');
      });
    }
  );
};

export const createUserProfileDocument = async (userAuth: any) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addItemToCollection = async (
  collectionKey: string,
  objectToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, { ...objectToAdd, id: newDocRef.id });
  return await batch.commit();
};

export const deleteItemFromCollection = async (
  collectionKey: string,
  objectKey: string
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  const delDocRef = collectionRef.doc(objectKey);
  batch.delete(delDocRef);
  return await batch.commit();
};

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator: any, collection: any) => {
    accumulator[collection.routeName] = collection;
    return accumulator;
  }, {});
};

export const convertDirectorySnapshotToMap = (sections: any) => {
  const transformedDirectory = sections.docs.map((doc: any) => {
    const { title, imageUrl, linkUrl } = doc.data();

    return {
      id: doc.id,
      title,
      imageUrl,
      linkUrl,
    };
  });

  return transformedDirectory;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
