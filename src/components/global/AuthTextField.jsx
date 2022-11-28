import React , { useState } from 'react';
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';

const AuthTextField = ({
    setDontShow , dontShow , value , 
    setValue , icon , showIcon , hideIcon ,
    placeholder ,
    pass , checkpass
}) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [valid , setValid] = useState("")

    return (
                <Input
                type={dontShow ? "password" : "text"}
                sx={{
                    mt : 2,
                    width : "100%",
                    "&::after" : {
                        borderBottomColor : valid || "gray.dark" ,
                    },
                    "&::before" : {
                        borderBottomColor : valid || "gray.dark" ,
                    }
                }}
                value={value}
                onChange={(e) => {
                    let text = e.target.value
                    if(!showIcon){
                        if(!text){
                            setValid("")
                        }
                        if(text){
                            pattern.test(text) ?
                            setValid("primary.main")
                            :
                            setValid("error.main")
                        }
                    }
                    if(showIcon && !checkpass){
                        text.length >= 8 ?
                        setValid("primary.main")
                        :
                        setValid("")
                    }
                    if(checkpass){
                        text === pass ? 
                        setValid("primary.main")
                        :
                        setValid("error.main")
                        if(!text){
                            setValid("")
                        }
                    }
                    setValue(e.target.value)
                }}
                placeholder={placeholder}
                startAdornment={
                    <InputAdornment
                    position="start">
                        <Box
                        sx={{
                            color : valid ,
                        }}>
                            {icon}
                        </Box>
                    </InputAdornment>
                }
                endAdornment={
                    showIcon &&
                    <InputAdornment
                    sx={{
                        cursor : "pointer",
                        opacity : "1",
                    }}
                    onClick={() => {
                        setDontShow(!dontShow)
                    }}
                    position="end">
                        {
                        dontShow ? 
                        
                        <Box
                        sx={{
                            color : valid ,
                        }}>
                            {showIcon}
                        </Box>
                        
                        :
                        
                        <Box
                        sx={{
                            color : valid ,
                        }}>
                            {hideIcon}
                        </Box>
                        
                        }
                        
                    </InputAdornment>
                }

                />
    );
}

export default AuthTextField;
