import React , { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import AuthTextField from "../global/AuthTextField"
import AuthButton from "../global/AuthButton"
import ProviderButton from "../global/ProviderButton"
import AuthDivider from "../global/AuthDivider"
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

import { signInWithGoogle } from '../../functions/auth';
import { signInWithEmail } from '../../functions/auth';
import { useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/navbarSlice';

const Login = () => {

    const dispatch = useDispatch();

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [dontShowPassword , setDontShowPassword] = useState(true)

    useEffect(() => {
        dispatch(changeCurrent("login"))
    },[]);

    return (
        <Box
        sx={{
            width : "100%",
            height : "100vh",
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center"
        }}>
            
            <Typography
            sx={{
                fontSize : "1.8rem",
                fontFamily : "roboto",
                fontWeight : "600",
                color : "black.dark"
            }}>
                Welcome Back!
            </Typography>

            <Typography
            sx={{
                fontSize : "1rem",
                fontFamily : "roboto",
                fontWeight : "500",
                color : "black.light"
            }}>
                Login to your acount
            </Typography>

            <Box
            onSubmit={(e) => {
                e.preventDefault();
                        if(!email){
                            return
                        }
                        if(!password){
                            return
                        }
                signInWithEmail(email , password)
            }}
            component="form"
            sx={{
                mt : 3,
                display : "flex",
                width : "min(250px,80%)",
                flexDirection : "column",
                alignItems : "flex-start"
            }}>
                <AuthTextField
                icon={<EmailIcon/>}
                value={email}
                setValue={setEmail}
                />

                <AuthTextField
                icon={<KeyIcon/>}
                value={password}
                setValue={setPassword}
                showIcon={<VisibilityIcon/>}
                hideIcon={<VisibilityOffIcon/>}
                dontShow={dontShowPassword}
                setDontShow={setDontShowPassword}
                />

                <Link
                style={{
                    textDecoration : "none"
                }}>
                    <Typography
                    sx={{
                        color : "primary.main",
                        mt : 1,
                        fontSize : ".9rem"
                    }}>
                        Forgot Password?
                    </Typography>
                </Link>

                <AuthButton
                    text="Sign in"
                />

                <AuthDivider/>

                <ProviderButton
                text="Continue with Google"
                icon={<GoogleIcon/>}
                onClick={() => {
                    signInWithGoogle()
                }}
                />

                <Link
                to="/signup"
                style={{
                    textDecoration : "none",
                    alignSelf : "center"
                }}>
                    <Typography
                    sx={{
                        color : "primary.main",
                        mt : 1,
                        fontSize : ".9rem"
                    }}>
                        dont have an acount?   let's create one
                    </Typography>
                </Link>


            </Box>
        </Box>
    );
}

export default Login;
