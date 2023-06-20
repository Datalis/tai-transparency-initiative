/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

const firebase = initializeApp({
	apiKey: 'AIzaSyDDRHEv2Y1OoJ2jiOpXvNgHXYX3XsfCj08',
	authDomain: 'transparency-cd0a3.firebaseapp.com',
	projectId: 'transparency-cd0a3',
	storageBucket: 'transparency-cd0a3.appspot.com',
	messagingSenderId: '744067165946',
	appId: '1:744067165946:web:26d45096b1b40af712a343'
});

const messaging = getMessaging(firebase);

onBackgroundMessage(messaging, (payload) => {
	console.log('[firebase-messaging-sw.js] Received background message', payload);
});
