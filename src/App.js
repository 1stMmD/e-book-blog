import { useState } from "react";

import { 
  BrowserRouter as Router , Routes , Route 
} from "react-router-dom"

import {
  Navbar , Book , Home,
  Saved , Footer , Reader
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
      </Routes>
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;
