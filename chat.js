// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = { 
  apiKey: "AIzaSyByKc7GtGeNJchiWJBVAYC95AFJRBZ_us8",
  authDomain: "vamosconversar-dbb82.firebaseapp.com",
  databaseURL:"https://vamosconversar-dbb82-default-rtdb.firebaseio.com",
  projectId:"vamosconversar-dbb82",
  storageBucket: "vamosconversar-dbb82.appspot.com",
  messagingSenderId: "1047343423913",
  appId:"1:1047343423913:web:b1cc7ba5acd4f536f6e4b8"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



