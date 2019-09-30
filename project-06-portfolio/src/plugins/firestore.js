import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBv_5BYyXgXdHIbCOLAuB3qx5HQhfWKQhE",
    authDomain: "my-vue-course.firebaseapp.com",
    databaseURL: "https://my-vue-course.firebaseio.com",
    projectId: "my-vue-course",
    storageBucket: "my-vue-course.appspot.com",
    messagingSenderId: "549609989900",
    appId: "1:549609989900:web:4215d0fead2ae91ffe8b29"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()