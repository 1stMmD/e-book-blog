import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';
import BackpackIcon from '@mui/icons-material/Backpack';

const iconSX = {
    color:"black.light",
    fontSize:"2rem",
    mr : 3,
    ml : 1.5
}

const whiteIconSX = {
    color:"white.main",
    fontSize:"1.5rem",
}

const noMarginIconSX = {
    color:"black.light",
    fontSize:"1.5rem",
}

export const sidebarSections = [
    {
        title:"Home",
        url : "/",
        name : "home" ,
        icon : <HomeIcon sx={iconSX}/>,
        whiteIcon : <HomeIcon sx={whiteIconSX}/>,
        noMarginIcon : <HomeIcon sx={noMarginIconSX}/>,
    },
    {
        title : "Profile",
        url : "/profile",
        name: "profile" ,
        icon : <PersonIcon sx={iconSX}/>,
        whiteIcon : <PersonIcon sx={whiteIconSX}/>,
        noMarginIcon : <PersonIcon sx={noMarginIconSX}/>,
    },
    {
        title:"Create",
        url : "/create",
        name : "create" ,
        icon : <AddIcon sx={iconSX}/>,
        whiteIcon : <AddIcon sx={whiteIconSX}/>,
        noMarginIcon : <AddIcon sx={noMarginIconSX}/>,
    }
];



export const adminSidebar = [
    {
        title : "Backpack",
        url : "/backpack",
        name: "backpack" ,
        icon : <BackpackIcon sx={iconSX}/>,
        whiteIcon : <BackpackIcon sx={whiteIconSX}/>,
        noMarginIcon : <BackpackIcon sx={noMarginIconSX}/>,
    }
]