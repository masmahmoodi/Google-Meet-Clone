import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CallMenuPanel from "./components/CallMenuPanel"
import Layout from "./components/Layout"
import Meeting from "./pages/Meeting"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CallMenuPanel />} />
          <Route path="meeting" element={<Meeting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
