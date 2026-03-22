// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC3baiSF88fOAoivVMNDj7z2wLT_WuTnvQ",
  authDomain: "pushn-e9866.firebaseapp.com",
  projectId: "pushn-e9866",
  storageBucket: "pushn-e9866.firebasestorage.app",
  messagingSenderId: "855213779949",
  appId: "1:855213779949:web:d8541be6c8bcab1cbb15e4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notification received:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});