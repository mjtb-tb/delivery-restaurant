import './rest.css'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import Header from "./components/header/Header"
import Home from './pages/Home'
import MainFood from './pages/MainFood'
import { Link } from 'react-router-dom'
import Breakfast from './pages/Breakfast'

export default function App(){

  let [sideBarIsOpened , setSideBarIsOpened] = useState(true)

  function sidebarOpen(){
    setSideBarIsOpened(true)
  }
  
  function sidebarClose(){
    setSideBarIsOpened(false)
  }

  let router = useRoutes([
    {path:'/', element:<><Home  ></Home></>,},
    {path:'/:id', element:<><MainFood ></MainFood></>},
    {path:'/breakfast', element:<><Breakfast ></Breakfast></>},
    
  ])

  return(
    <>
      <Header OnSidebarOpen={sidebarOpen}></Header>
      {router}
      <div className={`sidebar-overlay ${sideBarIsOpened?'sidebar-overlay-open':''}`} >
        <div className="sidebar">
          <div className="sidbar-top">
            <div className='sidbar-top-btn' onClick={sidebarClose}>exit</div>
          </div>
          <hr />
          <div className="sidebar-categories">
            <Link to='/breakfast' className="sidbar-categories-item">صبحانه</Link>
            <Link className="sidbar-categories-item">ناهار و شام</Link>
            <Link className="sidbar-categories-item">فست فود</Link>
          </div>
        </div>  
      </div>
      
    </>
  )
}