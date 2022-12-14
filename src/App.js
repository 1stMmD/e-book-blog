import { useEffect } from "react";
import { 
  BrowserRouter as Router , Routes , Route 
} from "react-router-dom"

import {
  Navbar , Book , Home,
  Profile , Footer , Reader,
   Create , BackPack, 
  EditBook , EditBanner ,
  Login , Signup, BookPopup , Search
} from "./components/index";

import ProtectUser from "./components/PrivateRoutes/PrivateUser";
import PrivateNoUser from "./components/PrivateRoutes/PrivateNoUser";

import axios from "axios"
import { setBooks , setBanners } from "./redux/dataSlice";
import { useDispatch , useSelector } from "react-redux";

import { handleAuthChanges } from "./functions/auth";

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authSlice)
  useEffect(() => {
    const unsubscribe = handleAuthChanges();

    return () => {
      unsubscribe()
    }
  },[])

  useEffect(() => {
    axios.get(`http://localhost:4000/books?_page=1&_limit=100&_sort=id&_order=desc`)
    .then(data => {
      dispatch(setBooks({
        data : data.data,
        pending : false,
        error : "",
      }))
    })
    .catch(err => {
      console.log(err.name)
      setBooks({
        data : [],
        isPending : false,
        error : err
      })
    })

    axios.get(`http://localhost:4000/banners`)
    .then(data => {
      dispatch(setBanners({
        data : data.data,
        pending : false,
        error : "",
      }))
    });
  },[])

  if(user === undefined){
    return(
      <div>loading...</div>
    )
  }

  return(
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<ProtectUser><Home/></ProtectUser>}/>
          <Route path="/book/:id" element={<ProtectUser><Book/></ProtectUser>}/>
          <Route path="/profile" element={<ProtectUser><Profile/></ProtectUser>}/>
          <Route path="/reader/:id" element={<ProtectUser><Reader/></ProtectUser>}/>
          <Route path="/create" element={<ProtectUser><Create/></ProtectUser>}/>
          <Route path="/backpack" element={<ProtectUser><BackPack/></ProtectUser>}/>
          <Route path="/search" element={<ProtectUser><Search/></ProtectUser>}/>
          <Route path="/editbook/:bookId" element={<ProtectUser><EditBook/></ProtectUser>}/>
          <Route path="/editbanner" element={<ProtectUser><EditBanner/></ProtectUser>}/>
          <Route path="/login" element={<PrivateNoUser><Login/></PrivateNoUser>}/>
          <Route path="/signup" element={<PrivateNoUser><Signup/></PrivateNoUser>}/>
      </Routes>
      <BookPopup/>
      <Footer/>
    </Router>
  );
}

export default App;
