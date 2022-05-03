import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';
import { writeBatch } from 'firebase/firestore';
import { Branch } from '../store/slices/tree.slice';

const firebaseConfig = {
  apiKey: 'AIzaSyDYOBzDzE3WOxZENFVyOno8Qi-YyNQ78R4',
  authDomain: 'react-tree-4f2e6.firebaseapp.com',
  projectId: 'react-tree-4f2e6',
  storageBucket: 'react-tree-4f2e6.appspot.com',
  messagingSenderId: '919180478453',
  appId: '1:919180478453:web:009113a3bfb86b4f6002bc',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

interface IArrToAdd {
  title: string;
}

export const addCollectionAndDocuments = async <T extends IArrToAdd>(
  collectionKey: string,
  arrToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  arrToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getTreeData = async (): Promise<Branch[]> => {
  const collectionRef = collection(db, 'tree');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const treeData = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const branch = docSnapshot.data();
    acc.push(branch as Branch);
    return acc;
  }, [] as Branch[]);

  return treeData;
};

// export const updateFile = async (file: Branch, pathArr: string[]) => {
//   const fileRef = doc(db, 'tree', pathArr[0].toLowerCase());
//   const fileSnap = await getDoc(fileRef);

//   if (fileSnap.exists()) {
//     try {
//       await updateDoc(fileRef, { ...file });
//     } catch (error) {
//       console.log('error', error);
//     }
//   }
// };
