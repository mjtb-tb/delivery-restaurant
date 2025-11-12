import Landing from "../components/Landing/Landing"
import Main from "../components/Main/Main"
import Slider from "../components/Slider/Slider"
import allData from "../allData"
import { useEffect } from "react"

export default function Home(){




  return(
    <>
        <section>
            <Landing></Landing>
            <Slider data={allData} ></Slider>
            <Main data={allData} title={'همه غذا ها'}></Main>
        </section>
    </>
  )
}