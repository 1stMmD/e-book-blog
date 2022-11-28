import { useEffect } from "react";
import { 
  BrowserRouter as Router , Routes , Route 
} from "react-router-dom"

import {
  Navbar , Book , Home,
  Saved , Footer , Reader,
  Admin , Create , BackPack, 
  EditBook , EditBanner , Requests,
  Login , Signup
} from "./components/index";

import ProtectUser from "./components/PrivateRoutes/PrivateUser";

import axios from "axios"
import { setBooks , setBanners } from "./redux/dataSlice";
import { useDispatch } from "react-redux";

import { handleAuthChanges } from "./functions/auth";

function App() {
  const dispatch = useDispatch()

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

  return(
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<ProtectUser><Home/></ProtectUser>}/>
          <Route path="/book/:id" element={<ProtectUser><Book/></ProtectUser>}/>
          <Route path="/saved" element={<ProtectUser><Saved/></ProtectUser>}/>
          <Route path="/reader/:id" element={<ProtectUser><Reader/></ProtectUser>}/>
          <Route path="/create" element={<ProtectUser><Create/></ProtectUser>}/>
          <Route path="/backpack" element={<ProtectUser><BackPack/></ProtectUser>}/>
          <Route path="/editbook" element={<ProtectUser><EditBook/></ProtectUser>}/>
          <Route path="/editbanner" element={<ProtectUser><EditBanner/></ProtectUser>}/>
          <Route path="/requests" element={<ProtectUser><Requests/></ProtectUser>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
