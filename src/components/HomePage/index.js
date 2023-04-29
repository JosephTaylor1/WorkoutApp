import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {
    Form
} from './HomepageFormElements';
import Stack from '@mui/material/Stack';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

const HomePage = (props) => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [ user, setUser ] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            setUser(currentUser);
        }
    });

    const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
          await alert(registerEmail + '  is created');
        } catch (error) {
            await console.log(error.message)
        }
    };

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            await alert('Logged in as ' + loginEmail);
          } catch (error) {
              console.log(error.message)
          }
    };

    const logout = async () =>{
        await signOut(auth);
        await alert(user.email + '  is now logged out');
        await setUser('');
    };

    return(
        <div>
            <Form
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
            >
                <Stack>
                    <TextField onChange={(e) => { setRegisterEmail(e.target.value)}} id="outlined-basic" label="Email:" variant="outlined" />
                    <TextField onChange={(e) => { setRegisterPassword(e.target.value)}} id="outlined-basic" label="Password:" variant="outlined" />
                    <Button onClick={register} variant="contained">Create User</Button>
                </Stack>

                <Stack>
                    <TextField onChange={(e) => { setLoginEmail(e.target.value)}} id="outlined-basic" label="Email:" variant="outlined" />
                    <TextField onChange={(e) => { setLoginPassword(e.target.value)}} id="outlined-basic" label="Password:" variant="outlined" />
                    <Button onClick={login} variant="contained">Login</Button>
                </Stack>

                <h4>Logged in as: </h4> {user ? user.email : ''}

                <Stack>
                    <Button onClick={logout} variant="contained">Sign Out</Button>
                </Stack>
            </Form>

        </div>
    );
};

export default HomePage;