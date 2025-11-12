import Landing from "../components/Landing/Landing"
import Main from "../components/Main/Main"
import Slider from "../components/Slider/Slider"
import allData from "../allData"
import { useEffect,useState } from "react"

export default function Breakfast(){

        let [filteredFoods,setFilteredFoods] = useState([])

    useEffect(()=>{
        let foods= allData.filter((f)=>f.category=='breakfast')
        setFilteredFoods(foods)
    },[])

  return(
    <>
        <section>
            <Landing></Landing>
            <Main data={filteredFoods} title={'صبحانه'}></Main>
        </section>
    </>
  )
}