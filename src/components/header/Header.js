import './Header.css';
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

export default function Header({OnSidebarOpen}){

        function sidbarBtnHandler(){
            OnSidebarOpen()
        }

  return(
    <>
        <section className="header">
            <div className="header-sidebarBtn" onClick={sidbarBtnHandler}>
                <AiOutlineMenu className='header-sidebar-icon' />
            </div>
            <div className="header-search">
                <Link className='header-search-icon' ><IoSearchSharp /></Link>
                <input className='header-search-input' type="text" />
            </div>
            <Link className="header-homeBtn" to='/'>
                <IoMdHome />
            </Link>
        </section>
        
    </>
  )
}