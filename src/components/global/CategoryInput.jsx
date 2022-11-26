import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';

const Chip = ({
    children ,
    idx , 
    setCategorys,
    categorys
}) => {
    return (
        <Box
        sx={{
            py : "2px",
            px : "5px",
            bgcolor : "primary.main",
            width : "fit-content",
            marginLeft : 1,
            marginBottom : 1,
            borderRadius : "6px",
            display : "inline-flex",
            flexDirection : "row",
            alignItems : "center",
            justifyContent : "space-between",
        }}>
            <Typography
            sx={{
                color : "white.main",
                fontSize : {
                    xs : "14px"
                },
                mr : 1,
            }}>
                {children}
            </Typography>

            <Box
            onClick={() => {
                let arr = JSON.parse(JSON.stringify(categorys))
                arr.splice(idx,1)
                setCategorys(arr)
            }}
            sx={{
                border : "none",
                borderRadius : "50%",
                display : "grid",
                placeItems : "center",
                bgcolor : "primary.main",
                p : .5,
                marginRight : 1,
                cursor : "pointer",
            }}
            >
                <CloseIcon
                sx={{
                    color : "white.main",
                    fontSize : "1rem",
                    p : "0"
                }}/>
            </Box>
        </Box>
    )
}
const CategoryInput = ({
    cValue , setCValue ,
    categorys , setCategorys
}) => {
    return (
        <Box
        component="form"
        onSubmit={(e) => {
            e.preventDefault();
            if(cValue && cValue !== " "){
                setCategorys(prev => [...prev , cValue]);
                setCValue("")
            }
        }}
        sx={{
            maxWidth : "80vw",
            position : "relative"
        }}
        >
            {categorys.map((item , idx) => {
                return (
                    <Chip
                    key={idx}
                    idx={idx}
                    categorys={categorys}
                    setCategorys={setCategorys}
                    >
                        {item}
                    </Chip>
                )
            })}
            
            <TextField
            value={cValue}
            onChange={(e) => {
                setCValue(e.target.value)
            }}
            sx={{
                width : "100%",
                mb : 2 ,
                border : "none",
                outline : "none",
                "input" : {
                    border : "none",
                    outlineColor : "red",
                    px : 1,
                    py : 1,
                    fontSize : "1rem",
                }
            }}>
            </TextField>
        </Box>
    );
}

export default CategoryInput;
