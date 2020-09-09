import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {

    const initialUser = {
        email: null,
        uid: null,
        role: null,
        pic: null,
        displayName: null
    };

    const [globalUser, setGlobalUser] = useState(initialUser);

    const [artId, setArtId] = useState('');
    const [productId, setProductId] = useState('');
    const [buyItem, setBuyItem] = useState([]);

    //Función de registro
    useEffect(() => {
        detectUser();
    }, []);

    //Detectar usuario
    const detectUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult, 'token');
                        if (!!idTokenResult.claims.admin) {
                            console.log('es admin');
                            setGlobalUser({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                pic: user.photoURL,
                                role: 'admin'
                            });
                        } else if (!!idTokenResult.claims.partner) {
                            console.log('es partner');
                            setGlobalUser({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                pic: user.photoURL,
                                role: 'partner'
                            });
                        } else {
                            console.log('es cliente');
                            setGlobalUser({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                pic: user.photoURL,
                                role: 'cliente'
                            });
                        }
                    }
                    );
            } else {
                console.log('user provider null');
            }
        });
    };

    console.log(globalUser);
    return (
        <UserContext.Provider value={{ globalUser, setGlobalUser, productId, setProductId, setArtId, artId, buyItem, setBuyItem }} >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
