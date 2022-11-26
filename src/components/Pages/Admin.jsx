import React , {useState , useRef , useEffect} from "react";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import { useDispatch } from "react-redux";
import { changeIsAdmin } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import { changeCurrent } from "../../redux/navbarSlice";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import SMButton from "../global/utils/SMButton";
import { ErrorBox } from "../index";

import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../functions/auth";

const Admin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //for functionality
    const [password , setPassword] = useState("");
    const [username , setUsername] = useState("");
    const [error , setError] = useState("")

    //for ux
    const [disable , setDisable] = useState(false);
    const [showPassword , setShowPassword] = useState(false);
    const monkey = useRef();

    const form = useRef();

    useEffect(() => {
        let {current : icon} = monkey;
        let prevent = (e) => {
            e.preventDefault();
        };

        icon && icon.addEventListener("selectstart" , prevent)

        dispatch(changeCurrent("admin"))

        return () => {
            icon && icon.removeEventListener("selectstart" , prevent)
        }
    },[])

    return (
        <>
            <Box
            sx={{
                position : "sticky",
                top:0,
                left:0,
                bgcolor : "black.main",
                opacity : "0.3",
                width : "100%",
                height : "100vh",
                display : "grid",
                placeItems : "center",
            }}/>

            <Box
            ref={form}
            onSubmit={(e) => {
                e.preventDefault();
                if(username !== "admin"){
                    setUsername("");
                    setError("ادمین پیدا نشد")
                    setDisable(false)
                    return
                }
                if(password !== "password"){
                    setPassword("");
                    setError("رمز اشتباه است")
                    setDisable(false)
                    return
                }
                setPassword("");
                setUsername("");
                setDisable(false)
                dispatch(changeIsAdmin(true))
                navigate("/")

            }}
            component="form"
            sx={{
                width : "250px",
                height : "300px",
                bgcolor : "white.main",
                position : "absolute",
                top : "50%",
                left : "50%",
                transform : "translate(-50%) translateY(-50%)",
                borderRadius : "15px",
                display : "grid",
                placeItems : "center",
                boxShadow : "0 4px 12px rgba(20,20,20,.2)",
                zIndex : "4",
            }}>

                <Typography
                component="h2"
                sx={{
                    color : "black.main",
                    fontSize : "1.5rem",
                    fontWeight : "600",
                }}>
                    ورود به حساب
                </Typography>

                {/* username field */}
                <Input
                sx={{
                    width : "80%",
                    maxWidth : "250px"
                }}
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                placeholder="username"
                startAdornment={
                    <InputAdornment
                    position="start">
                        <AccountCircleIcon
                        sx={{
                            color : "primary.main",
                        }}/>
                    </InputAdornment>
                }

                />

                {/* password field */}
                <Input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                sx={{
                    width : "80%",
                    maxWidth : "250px"
                }}
                placeholder="password"

                //change visinility of password
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment
                    ref={monkey}
                    sx={{
                        cursor : "pointer",
                        opacity : "1",
                    }}
                    onClick={() => {
                        setShowPassword(!showPassword)
                    }}
                    position="end">
                        {showPassword ? 
                        "🙉"
                        :
                        "🙈"
                        }
                        
                    </InputAdornment>
                }
                startAdornment={
                    <InputAdornment
                    position="start">
                        <LockIcon
                        sx={{
                            color : "primary.main",
                        }}/>
                    </InputAdornment>
                }
                />

                <SMButton
                type="submit"
                color="primary"
                Bcolor="#AE4BDD"
                disable={disable}
                onClick={(e) => {
                    e.target.setAttribute("type" , "submit")
                    setDisable(true);
                }}
                >
                    تایید
                </SMButton>

                <GoogleButton
                style={{
                    transform : "scale(.8)"
                }}
                onClick={() => {
                    signInWithGoogle()
                }}/>

            </Box>


            <ErrorBox
            Error={error}
            SetError={setError}/>
        </>
    );
}

export default Admin;
