import { firebase } from '../firebase';
import 'firebase/firestore';
import 'firebase/functions';

const db = firebase.firestore();

export const getProducts= async(category) => {
    db.collection("products").where("category", "==", category)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}



