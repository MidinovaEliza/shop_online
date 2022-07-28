import logo from './logo.svg';
import './App.scss';
// /**
//  * redux react-redux redux-devtools-extension
//  * folder redux- папка (index js-store,reducer)
//  * react/index.js -<Provider></App></Provider>
//  * useSelector(()=>)
//  * useDispatch =dispatch({type:.../payload:...})
//  * switch case
//  *
//  * **/
//useSelector
//useDispatch
//blog.rocketkot.com


import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Catalog from "./Catalog";
import Basket from "./Basket";
import Orders from "./Orders";

import SinglePage from "./SinglePage";
import {useState} from "react";

function App() {
const [mode,setMode]=useState(JSON.parse(localStorage.getItem("mode")) || false)

const handleMode=()=>{
    setMode(!mode)
    localStorage.setItem("mode",JSON.stringify(!mode))
}
    return (
    <div className="App" style={{
        background:mode? "white":"black"
    }}>
      <button  onClick={handleMode}
          className=" my-4 mx-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span style={{
      background:mode? "white":"black"
  }}
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
   {mode? "light mode" :"dark mode"}
  </span>
      </button>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/basket" element={<Basket/>}/>
          <Route path="/order" element={<Orders/>}/>}/>

        <Route path="/product-detail/:id" element={<SinglePage/>}/>
      </Routes>


    </div>
  );
}

export default App;

