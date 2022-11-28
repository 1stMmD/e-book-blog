import Box from "@mui/material/Box";
import SMButton from "./SMButton";
import { useSelector } from "react-redux"

const Toggle = ({section , setSection}) => {
    const { user } = useSelector(state => state.authSlice);

    return (
        <>
            <Box
            sx={{
                mt : {
                    lg : 1
                },
                width : "80%",
                display : "flex",
                gap : 4,
                p : 1,
                justifyContent : "center",
                alignItems : "center",
            }}
            >
                <SMButton
                size="responsive"
                onClick={() => {
                    setSection("book")
                }}
                color="primary"
                Bcolor="#AE4BDD"
                disable={section === "book"}
                >
                    کتاب
                </SMButton>

                { user?.admin ?
                <SMButton
                size="responsive"
                onClick={() => {
                    setSection("banner")
                }}
                color="primary"
                Bcolor="#AE4BDD"
                disable={section === "banner"}
                >
                    بنر
                </SMButton>
                :
                ""
                }
                

            </Box>
            
            <Box
            sx={{
                display : "block",
                width :"min(700px,70%)",
                height : "1px",
                bgcolor : "gray.dark",
                my : 2,
                mb : {
                    xs : 2,
                    lg : 3,
                    xl : 4,
                }
            }}/>
        </>
    );
}

export default Toggle;
