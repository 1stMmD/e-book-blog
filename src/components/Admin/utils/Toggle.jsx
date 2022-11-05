import Box from "@mui/material/Box";
import { SMButton as StyledButton } from "../../Book";

const Toggle = ({section , setSection}) => {
    return (
        <>
            <Box
            sx={{
                width : "80%",
                display : "flex",
                gap : 4,
                p : 1,
                justifyContent : "center",
                alignItems : "center",
            }}
            >
                <StyledButton
                onClick={() => {
                    setSection("book")
                }}
                color="primary"
                Bcolor="#AE4BDD"
                disable={section === "book"}
                >
                    کتاب
                </StyledButton>

                <StyledButton
                onClick={() => {
                    setSection("banner")
                }}
                color="primary"
                Bcolor="#AE4BDD"
                disable={section === "banner"}
                >
                    بنر
                </StyledButton>
                

            </Box>
            
            <Box
            sx={{
                display : "block",
                width :"70%",
                height : "1px",
                bgcolor : "gray.dark",
                my : 2,
            }}/>
        </>
    );
}

export default Toggle;
