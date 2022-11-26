import { useEffect } from "react";
import { 
  BrowserRouter as Router , Routes , Route 
} from "react-router-dom"

import {
  Navbar , Book , Home,
  Saved , Footer , Reader,
  Admin , Create , BackPack, 
  EditBook , EditBanner , Requests
} from "./components/index";

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
  })

  return(
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:id" element={<Book/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/reader/:id" element={<Reader/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/backpack" element={<BackPack/>}/>
          <Route path="/editbook" element={<EditBook/>}/>
          <Route path="/editbanner" element={<EditBanner/>}/>
          <Route path="/requests" element={<Requests/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
