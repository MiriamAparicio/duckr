import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDt2vl5zp0W46ih8DdOabVOd1DFitAvtqY',
  authDomain: 'duckrs-ee13d.firebaseapp.com',
  databaseURL: 'https://duckrs-ee13d.firebaseio.com',
  projectId: 'duckrs-ee13d',
  storageBucket: 'duckrs-ee13d.appspot.com',
  messagingSenderId: '788915365800',
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
