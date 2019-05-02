const firebase = require('firebase')

let config = {
  apiKey: "AIzaSyAIqM9ggP9VTXg9RjDjeG6x57A6RzF5TCg",
  authDomain: "stickerberg.firebaseapp.com",
  databaseURL: "https://stickerberg.firebaseio.com",
  projectId: "stickerberg",
  storageBucket: "stickerberg.appspot.com",
  messagingSenderId: "403773816795"
}
firebase.initializeApp(config)
console.log('done connect!')

module.exports = firebase
