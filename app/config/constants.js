import firebase from 'firebase'
import { apiKey } from './api_keys'

// Initialize Firebase
const config = {
  apiKey: apiKey,
  authDomain: 'duckrs-ee13d.firebaseapp.com',
  databaseURL: 'https://duckrs-ee13d.firebaseio.com',
  projectId: 'duckrs-ee13d',
  storageBucket: 'duckrs-ee13d.appspot.com',
  messagingSenderId: '788915365800',
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
// export const repliesExpirationLength = 300000
