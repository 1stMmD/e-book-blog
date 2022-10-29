import { createTheme , ThemeProvider } from "@mui/material";
const custom = createTheme({
    typography:{
        fontFamily : [
            "YekanBakh"
        ].join("")
    },
    palette:{
       black:{
        light : "#606060",
        main : "#454545",
        dark:"#303030",
       },
       grey : {
        main : "#E7E7E7"
       },
       primary:{
        main:"#CC68FB"
       },
       white:{
        main : "#ffffff"
       },
       yellow : {
        light : "#FFD84E",
        main : "#FFD232",
        dark : "#E1B92C",
       },
       blue:{
        light : "#5DB1FE",
        main : "#329DFF",
        dark : "#1F81DB",
       },
       pink : {
        light : "#FF5ED2",
        main : "#FF37C7",
        dark : "#D71CA2",
       }

    }
})

const CustomTheme = ({children}) => {
    return(
        <ThemeProvider theme={custom}>
            {children}
        </ThemeProvider>
    )
}

export default CustomTheme;