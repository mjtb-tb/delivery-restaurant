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
    let [foodCount,setFoodCount] = useState(0)
    let [foundFood,setFoundFood] = useState({})
    let [formOpened,setFormOpened] = useState(false)
    let [confrimed,setConfrimed] = useState(false)


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

    function formOpenHandler(){
        setFormOpened(true)
    }

    function formCancelBtnHandler(){
        setFormOpened(false)
    }

    function formConfrimBtnHandler(){
        setFormOpened(false)
        setConfrimed(true)
        setTimeout(()=>{
            setConfrimed(false)
        },3000)
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
                <button className="mainFood-main-orderBtn" onClick={formOpenHandler}>سفارش</button>
            </div>
        </main>
        <div className={`mainfood-form-container ${formOpened?'formIsOpened':''}`}>
            <div className="mainfood-form">
                <div className="mainfood-form-content">
                    <div className="mainfood-form-content-text">آیا از سفارش خود مطمئن هستید؟</div>
                    <div className="mainfood-form-content-details">
                        <div className="mainfood-form-content-details-foodName">
                            <div className="mainfood-form-content-details-foodName-title">نام:</div>
                            <span className="mainfood-form-content-details-foodName-text">{foundFood.name}</span>
                        </div>
                        <div className="mainfood-form-content-details-foodCount">
                            <div className="mainfood-form-content-details-foodCount-title">تعداد:</div>
                            <span className="mainfood-form-content-details-foodCount-text">{foodCount}</span>
                        </div>

                    </div>
                    <div className="mainfood-form-content-btn-container">
                        <button className="mainfood-form-content-confrimBtn" onClick={formConfrimBtnHandler}>تایید</button>
                        <button className="mainfood-form-content-cancelBtn" onClick={formCancelBtnHandler}>لغو</button>                    
                    </div>

                </div>
            </div>
        </div>
        <div className={`message ${confrimed?'messageShow':''}`}>
            <div className="message-content">
                <span className="message-text">سفارش شما با موفقیت ثبت شد</span>
            </div>
        </div>

    </>
  )
}