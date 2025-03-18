import React from 'react'
// import './index.jsx'

// import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from "react-router";
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Teams from './pages/Teams';
import Reports from './pages/Reports';
import Invoices from './pages/Invoices';
import Contracts from './pages/Contracts';





function App () {

  return(
    <>
    {/* <SideBar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/invoices' element={<Invoices/>} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/tasks' element={<Tasks/>} />
      <Route path='/teams' element={<Teams/>} />
      <Route path='/contracts' element={<Contracts/>} />

    </Routes>
    </BrowserRouter>

    </>
  )
}
  


export default App





