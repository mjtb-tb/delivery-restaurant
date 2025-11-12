import Landing from "../components/Landing/Landing"
import Main from "../components/Main/Main"
import Slider from "../components/Slider/Slider"
import allData from "../allData"
import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import './MainFood.css'
import { LuBadgePlus } from "react-icons/lu";
import { BsPatchMinus } from "react-icons/bs";

export default function MainFood(){
    let [foodCount,setFoodCount] =useState(0)
    let [foundFood,setFoundFood] =useState({})


    let params = useParams()
    function addBtnHandler(){
        setFoodCount((prev)=>{
            return ++prev
        })
    }
    
    function minusBtnHandler(){
        if(foodCount==0){
            return
        }
        setFoodCount((prev)=>{
            return --prev
        })
    }

    useEffect(()=>{
        let foundItem = allData.find((f)=>f.id==params.id)
        setFoundFood(foundItem)
    },[])

  return(
    <>
        <section className="mainFood-top">
            <div className="mainFood-top-overlay">
                <div className="mainFood-top-imageContainer">
                    <img src={foundFood.imageSrc} alt="" className="mainFood-top-img"/>
                </div>
            </div>
        </section>
        <main className="mainFood-main">
            <div className="mainFood-main-title">{foundFood.name}</div>
            <p className="mainFood-main-description">
                {foundFood.description}
            </p>
            <div className="mainFood-main-foodCount">
                <div className="mainFood-main-foodCount-left">
                    <div className="mainFood-main-foodCount-left-minusBtn" onClick={minusBtnHandler}><BsPatchMinus /></div>
                    <span className="mainFood-main-foodCount-left-count">{foodCount}</span>
                    <div className="mainFood-main-foodCount-left-addBtn" onClick={addBtnHandler}><LuBadgePlus /></div>
                </div>
                <div className="mainFood-main-foodCount-right">تعداد:</div>
            </div>
            <div className="mainFood-main-orderBtn-container">
                <button className="mainFood-main-orderBtn">سفارش</button>
            </div>
        </main>
    </>
  )
}