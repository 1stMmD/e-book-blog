import Box from '@mui/material/Box';
import React , {useEffect} from 'react';
import {CategoryBox} from "../index";
import { useDispatch , useSelector } from 'react-redux';
import {changeCurrent} from "../../redux/navbarSlice";
import { categorys } from '../../utils/categorys';

const Home = () => {

    const dispatch = useDispatch();

    const {books , banners} = useSelector(state => state.dataSlice);

    React.useEffect(() => {
        dispatch(changeCurrent("home"))
    },[dispatch])

    return (
        <Box
        sx={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <CategoryBox 
            header=""
            type="banner"
            data={banners.data}/>

            {books.data &&
                categorys.map(({title , category} , idx) => {
                    if(category === "new"){
                        return(
                            <CategoryBox
                            key={idx}
                            header={title}
                            type="book"
                            data={books.data}
                            isPending={books.isPending}
                            />
                        )
                    }
                    return(
                        <CategoryBox
                        key={idx}
                        header={title}
                        type="book"
                        data={books.data.filter(item => {
                            if(item.categorys.includes(category)){
                                return item;
                            }
                        })}/>
                    )
                })
            }
            
        </Box>
    );
}

export default Home;
