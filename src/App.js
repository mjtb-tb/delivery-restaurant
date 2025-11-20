import './rest.css'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import Header from "./components/header/Header"
import Home from './pages/Home'
import MainFood from './pages/MainFood'
import Footer from './components/Footer/Footer'
import { Link } from 'react-router-dom'
import Breakfast from './pages/Breakfast'
import Fastfood from './pages/Fastfood'
import Lunch from './pages/Lunch'

export default function App(){

  let [sideBarIsOpened , setSideBarIsOpened] = useState(false)

  function sidebarOpen(){
    setSideBarIsOpened(true)
  }
  
  function sidebarClose(){
    setSideBarIsOpened(false)
  }

  let router = useRoutes([
    {path:'/', element:<><Home  ></Home></>,},
    {path:'/breakfast', element:<><Breakfast ></Breakfast></>},
    {path:'/fastfood', element:<><Fastfood ></Fastfood></>},
    {path:'/lunch', element:<><Lunch ></Lunch></>},
    {path:'/:id', element:<><MainFood ></MainFood></>},

    
  ])

  return(
    <>
      <Header OnSidebarOpen={sidebarOpen}></Header>
      {router}
      <Footer></Footer>
      <div className={`sidebar-overlay ${sideBarIsOpened?'sidebar-overlay-open':''}`} onClick={sidebarClose} >
        <div className="sidebar">
          <div className="sidbar-top">
            <div className='sidbar-top-btn' onClick={sidebarClose}>خروج</div>
          </div>
          <hr />
          <div className="sidebar-categories">
            <Link to='/breakfast' className="sidbar-categories-item">صبحانه</Link>
            <Link to='/lunch' className="sidbar-categories-item">ناهار و شام</Link>
            <Link to='/fastfood' className="sidbar-categories-item">فست فود</Link>
          </div>
        </div>  
      </div>
      
    </>
  )
}