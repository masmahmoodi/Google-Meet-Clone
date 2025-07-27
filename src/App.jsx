import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import CallMenuPanel from "./components/CallMenuPanel"
import Layout from "./components/Layout"
export default function App(){
  return (
   
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<CallMenuPanel />} />
        </Route>
      </Routes>
     </BrowserRouter>
  )
}