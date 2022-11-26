//navbar

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

