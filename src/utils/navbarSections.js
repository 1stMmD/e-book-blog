import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
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
        title:"صفحه اصلی",
        url : "/",
        name : "home" ,
        icon : <HomeIcon sx={iconSX}/>,
        whiteIcon : <HomeIcon sx={whiteIconSX}/>,
        noMarginIcon : <HomeIcon sx={noMarginIconSX}/>,
    },
    {
        title : "ذخیره شده ها",
        url : "/saved",
        name: "saved" ,
        icon : <BookmarkIcon sx={iconSX}/>,
        whiteIcon : <BookmarkIcon sx={whiteIconSX}/>,
        noMarginIcon : <BookmarkIcon sx={noMarginIconSX}/>,
    },
    {
        title:"پست جدید",
        url : "/create",
        name : "create" ,
        icon : <AddIcon sx={iconSX}/>,
        whiteIcon : <AddIcon sx={whiteIconSX}/>,
        noMarginIcon : <AddIcon sx={noMarginIconSX}/>,
    }
];

export const adminSidebar = [
    {
        title : "کوله",
        url : "/backpack",
        name: "backpack" ,
        icon : <BackpackIcon sx={iconSX}/>,
        whiteIcon : <BackpackIcon sx={whiteIconSX}/>,
        noMarginIcon : <BackpackIcon sx={noMarginIconSX}/>,
    },
    {
        title : "لیست درخواست ها",
        url : "/requests",
        name: "requests" ,
        icon : <PlaylistAddCheckIcon sx={iconSX}/>,
        whiteIcon : <PlaylistAddCheckIcon sx={whiteIconSX}/>,
        noMarginIcon : <PlaylistAddCheckIcon sx={noMarginIconSX}/>,
    }
]