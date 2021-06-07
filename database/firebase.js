import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA5CmAWmSjMLjnxigF85jjgqhei4UKxuPQ",
  authDomain: "pruebita-1c4c2.firebaseapp.com",
  databaseURL: "https://pruebita-1c4c2-default-rtdb.firebaseio.com",
  projectId: "pruebita-1c4c2",
  storageBucket: "pruebita-1c4c2.appspot.com",
  messagingSenderId: "126371026855",
  appId: "1:126371026855:web:47b947df98cbb785700882",
  measurementId: "G-3770J9C0B2",
};

firebase.initializeApp(firebaseConfig);

// Crear usuario
function writeUserData(user) {
  firebase
    .database()
    .ref("users/" + user.uid)
    .set(user)
    .catch((error) => {
      console.log(error.message);
    });
}

firebase.createUser = async (
  setNombre,
  setCorreoInstitucional,
  setCodigoInstitucional,
  setPassword
) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(setCorreoInstitucional, setPassword)
    .then(function (data) {
      const user = {
        nombre: setNombre,
        codigoInstitucional: setCodigoInstitucional,
        correoInstitucional: setCorreoInstitucional,
        uid: data.user.uid,
        bike: "empty",
      };
      console.log(data.user.uid);
      writeUserData(user);
    });
};
// ----------------------------------------------

// Crear bicicleta
firebase.saveNewBike = async (
  setNombre,
  setModelo,
  setColor,
  setAccesorios
) => {
  if ((setNombre || setModelo || setColor || setAccesorios) === "") {
    alert("Asegurate de llenar todos los campos 🙄");
  } else {
    await firebase
      .firestore()
      .collection("Bicicleta")
      .add({
        name: setNombre,
        model: setModelo,
        color: setColor,
        accesories: setAccesorios,
      })
      .then(function (bike) {
        console.log("Bike id: " + bike.id);
        var user = firebase.auth().currentUser;
        console.log("El UID de usuario es: " + user.uid);
        if (user) {
          console.log("El usuario está loggeado");
          firebase
            .database()
            .ref("users/" + user.uid)
            .update({
              bike: bike.id,
            });
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
};

// ----------------------------------------------

export default firebase;
