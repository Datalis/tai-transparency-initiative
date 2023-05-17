import { browser, dev } from '$app/environment';
import { PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_APP_ID, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET } from '$env/static/public';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage, type Messaging, type MessagePayload } from 'firebase/messaging';

const VAPIKEY = 'BMQ2N-hXXkBEfXuhMKVL5Hu_NFzTWnS9oPgN7MbW9oXvtVHIAywfSQF1UsTI_q-GSfW3CRx6roj2HfOX5y11o4w'

export const firebaseConfig: FirebaseOptions = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    appId: PUBLIC_FIREBASE_APP_ID,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET
}

export let app: FirebaseApp;
export let messaging: Messaging;

const init = () => {
    if (!browser) return;
    if (!app) app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
    console.log('Firebase initilized.')
}

init();

export const getMessagingToken = async () => {
    const sw = await navigator.serviceWorker.register('/service-worker.js', {
        type: dev ? 'module' : 'classic'
    });
    return getToken(messaging, { vapidKey: VAPIKEY, serviceWorkerRegistration: sw });
};

export const onMessagingListener = (exec: (payload: MessagePayload) => void) => onMessage(messaging, exec);



