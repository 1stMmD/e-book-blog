//navbar
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';

//adimn navbar
import AddIcon from '@mui/icons-material/Add';
import BackpackIcon from '@mui/icons-material/Backpack';

// color setting
import ColorLensIcon from '@mui/icons-material/ColorLens';

// align setting
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

export const categorys = [
    {
        name:"new",
        title:"جدید ترین کتاب ها"
    },
    {
        name:"populer",
        title:"محبوب ترین کتاب ها"
    },
    {
        name:"selfImprovment",
        title:"کتاب های پیشرفت شخصی"
    }
];

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
    }
];

export const adminSidebar = [
    {
        title:"پست جدید",
        url : "/admin/create",
        name : "create" ,
        icon : <AddIcon sx={iconSX}/>,
        whiteIcon : <AddIcon sx={whiteIconSX}/>,
        noMarginIcon : <AddIcon sx={noMarginIconSX}/>,
    },
    {
        title : "کوله",
        url : "/admin/backpack",
        name: "backpack" ,
        icon : <BackpackIcon sx={iconSX}/>,
        whiteIcon : <BackpackIcon sx={whiteIconSX}/>,
        noMarginIcon : <BackpackIcon sx={noMarginIconSX}/>,
    }
]

const iconStyle = {
    color : "white.main",
}

export const setting = [
    {
        name : "bgcolor",
        icons : {
            default : <ColorLensIcon sx={iconStyle}/>
        },
        options : {
            default : {
                color : "#FFFFFF",
                fontColor : "#252525"
            },
            vanilla : {
                color : "#FFFCDE",
                fontColor : "#5C4E40"
            },
            dark : {
                color : "#555555",
                fontColor : "#e8e8e8"
            }
        }
    },
    {
        name : "align",
        icons : {
            default : <FormatAlignJustifyIcon sx={iconStyle}/>,
            right : <FormatAlignRightIcon sx={iconStyle}/>,
            left : <FormatAlignLeftIcon sx={iconStyle}/>,
            center : <FormatAlignCenterIcon sx={iconStyle}/>,
        },
        options : {
            default : "justify",
            right : "right",
            left : "left",
            center : "center",
        }
    }
]

