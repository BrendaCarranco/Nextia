import React from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

const Login = (props) => {

    const loginGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);
            const collection = await firebase.firestore().collection('usuarios').doc(res.user.email).get();

            if (!collection.exists) {
                await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                    email: res.user.email,
                    uid: res.user.uid,
                    role: 'cliente',
                    displayName: res.user.displayName
                });
            }
            return props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <h3>Login</h3>
            <div>
                <input
                    placeholder='Correo'
                />
                <input
                    placeholder='Contraseña'
                />
                <button>Ingresar</button>
                <div>
                    <button
                        onClick={() => loginGoogle()}
                    >Iniciar sesión con google</button>
                </div>
            </div>
            <h3>Registro</h3>
            <button
                onClick={() => loginGoogle()}
            >Registro con google</button>
        </div>
    );
};

export default withRouter(Login);





//register.js

/* const { userRegister } = useContext(UserContext);

const handleRegister = (e) => {
    e.preventDefault();
    if (!email.trim()) {
        console.log('Ingresa un correo');
        return;
    }
    if (!passwordReg.trim()) {
        console.log('Ingresa contraseña');
        return;
    }
    console.log('validando...');
    userRegister(email, passwordReg, name);
    setInstructions(true);
    setEmail('');
    setPasswordReg('');
    setName('');

}; */