import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import SideBar from './components/SideBar'
// import Contracts from './pages/Contracts'
// import Dashboard from './pages/Dashboard'
// import Invoices from './pages/Invoices'
// import Projects from './pages/Projects'
// import Reports from './pages/Reports'
// import Tasks from './pages/Tasks'
// import Teams from './pages/Teams.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SideBar/> */}
    {/* <Contracts/>
    <Dashboard/>
    <Projects/>
    <Reports/>
    <Tasks/>
    <Teams/>
    <Invoices/> */}
  </StrictMode>,
)
