import Landing from "../components/Landing/Landing"
import Main from "../components/Main/Main"
import Slider from "../components/Slider/Slider"
import allData from "../allData"
import { useEffect,useState } from "react"
import { data } from "react-router-dom"

export default function Breakfast(){

        let [filteredFoods,setFilteredFoods] = useState([])

    useEffect(()=>{
        let foods= allData.filter((f)=>f.category==='breakfast');
        console.log('foods',foods)
        setFilteredFoods(foods)
        // console.log('filtered foods:',filteredFoods)
    },[])

  return(
    <>
        <section>
          {
        console.log('filtered foods:',filteredFoods)
          }
            <Landing></Landing>
            <Main data={filteredFoods} title={'صبحانه'}></Main>
        </section>
    </>
  )
}