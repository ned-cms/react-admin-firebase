import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { RAFirebaseOptions } from '../../options';
import {
  FireApp,
  FireAuth,
  FireUser,
  FireAuthUserCredentials,
  FireStorage,
  FireStore,
  FireStoreTimeStamp,
  FireStoragePutFileResult,
  FireStoreCollectionRef,
  FireStoreBatch
} from 'misc/firebase-models';
import firebase from 'firebase/compat';
import firestore = firebase.firestore;

export interface IFirebaseWrapper {
  options: RAFirebaseOptions;
  putFile(storagePath: string, rawFile: any): FireStoragePutFileResult;
  getStorageDownloadUrl(fieldSrc: string): Promise<string>;

  dbGetCollection(absolutePath: string): FireStoreCollectionRef;
  dbCreateBatch(): FireStoreBatch;
  dbMakeNewId(): string;

  OnUserLogout(cb: (user: FireUser | null) => void): void;
  authSetPersistence(
    persistenceInput: 'session' | 'local' | 'none'
  ): Promise<void>;
  authGetUserLoggedIn(): Promise<FireUser>;
  authSigninEmailPassword(
    email: string,
    password: string
  ): Promise<FireAuthUserCredentials>;
  authSignOut(): Promise<void>;
  serverTimestamp(): FireStoreTimeStamp | Date;

  // Deprecated methods
  /** @deprecated */
  fireStorage(): FireStorage | firebase.storage.Storage;

  /** @deprecated */
  db(): FireStore | firebase.firestore.Firestore;
  /** @deprecated */
  GetApp(): FireApp;
  /** @deprecated */
  GetUserLogin(): Promise<FireUser>;
}
