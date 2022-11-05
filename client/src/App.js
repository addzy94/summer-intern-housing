import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(1);

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/hotels" element={<List/>}/>
  //       <Route path="/hotels/:id" element={<Hotel/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <div>
      <button onClick={ decrementCount }>-</button>
      <span>{ count }</span>
      <button onClick={ incrementCount }>+</button>
    </div>
  )
}

export default App;
