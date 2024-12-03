import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from './component/Navigation'
import Create from './component/Create'
import Read from './component/Read'
// import Practice from './component/Practice';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    {/* <Practice/> */}
        <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="read" element={<Read />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



