import React, { useEffect, useState } from 'react';
import { firebase } from '../../firebase';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const res = await firebase.firestore().collection('usuarios').get();
            const arrayUsers = res.docs.map(doc => doc.data());
            setUsers(arrayUsers);
        } catch (error) {
            console.log(error);
        }
    };

    const makeAdmin = email => {
        const addRole = firebase.functions().httpsCallable('addNewAdmin');
        addRole({ email: email })
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    console.log('no tiene permisos');
                    return;
                }
                firebase.firestore().collection('usuarios').doc(email).update({ role: 'admin' })
                    .then(user => {
                        console.log('usuario modificado a administrador');
                        fetchUsuarios();
                    });
            });
    };

    const makePartner = email => {
        const addRole = firebase.functions().httpsCallable('createMember');
        addRole({ email: email })
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    console.log('no tiene permisos');
                    return;
                }
                firebase.firestore().collection('usuarios').doc(email).update({ role: 'partner' })
                    .then(user => {
                        console.log('usuario modificado a partner');
                        fetchUsuarios();
                    });
            });
    };

    return (
        <div>
            <h3>Vista usuarios</h3>
            <div>
                <Table className='black-text'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actualizar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                <TableRow key={user.uid}>

                                    <TableCell>{user.displayName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        {
                                            user.role === 'cliente' && <Button
                                                type='text'
                                                variant="outlined"
                                                color="default"
                                                onClick={() => makePartner(user.email)}
                                            >Partner</Button>}
                                        {<Button onClick={() => makeAdmin(user.email)}>
                                            Hacer admin
                                                    </Button>}
                                        {
                                            user.role === 'partner' && <Button
                                                type='text'
                                                variant="outlined"
                                                color="default"
                                                onClick={() => console.log('hi')}
                                            >Cliente</Button>
                                        }

                                    </TableCell>


                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Admin;
