import { 
  BrowserRouter as Router , Routes , Route 
} from "react-router-dom"

import {
  Navbar , Book , Home,
  Saved , Footer , Reader,
  Admin , Create , BackPack, 
  EditBook , EditBanner
} from "./components/index";

import { Provider } from "react-redux";
import store from "./redux/configureStore";

function App() {
  return(
    <Provider store={store}>
    <Router>
      
      <Routes>
          <Route path="/" element={<><Navbar/><Home/></>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/saved" element={<><Navbar/><Saved/></>}/>
          <Route path="/reader" element={<Reader/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/create" element={<><Navbar/><Create/></>}/>
          <Route path="/admin/backpack" element={<BackPack/>}/>
          <Route path="/admin/editbook" element={<EditBook/>}/>
          <Route path="/admin/editbanner" element={<EditBanner/>}/>
      </Routes>
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;
