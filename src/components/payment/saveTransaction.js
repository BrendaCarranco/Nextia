import React, { useContext } from 'react';
import { firebase } from '../../firebase';
import 'firebase/firestore';
import 'firebase/functions';

import { UserContext } from '../../context/UserProvider';

const db = firebase.firestore();

export const saveTransaction = (transaction) => {
    db.collection("transaction").add(transaction)
        .then(function (docRef) {

            console.log(docRef);
            return docRef.id;

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};
