import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA1__Ml15wnjZzrOfw-MiBODHixiXxGzWU",
    authDomain: "notereactfedu-3e46c.firebaseapp.com",
    databaseURL: "https://notereactfedu-3e46c.firebaseio.com",
    projectId: "notereactfedu-3e46c",
    storageBucket: "notereactfedu-3e46c.appspot.com",
    messagingSenderId: "892473288934",
    appId: "1:892473288934:web:183770793c1c08b8ea3327",
    measurementId: "G-3JMEXMBNP8"
  };
  
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);


// Kết nối database 
var data = firebaseConnect.database().ref('dataForNote/node1');
// Lấy dữ liệu 

// data.once('value').then(function(snapshot){
//     console.log(snapshot.val()); 
// })

// Sửa dữ liệu 
data.set({
    id: 1,
    title:"Ngay 20/12",
    content: "Demo content for note"
})
data = firebaseConnect.database().ref('dataForNote');
//  Thêm dữ liệu 
data.push({
    title: "Day la tieu de so 3",
    content: "Day la noi dung so 3"
  })

data.child("-MFins1ge3z3zxckmvYo").remove();