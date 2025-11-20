import './Main.css'
import Box from '../Box/Box';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination'

export default function Main({ data, title }) {
  let [currentPageNumber, setCurrentPageNumber] = useState(1)
  let [paginatedTodos, setPaginatedTodos] = useState([])

  let pageSize = 6;
  console.log('data',data)
  let pageCount = Math.ceil(data.length / pageSize)
    console.log('data2',data)



  useEffect(() => {
    let endIndex = currentPageNumber * pageSize
    let startIndex = endIndex - pageSize
    let newArray = data.slice(startIndex, endIndex)
    setPaginatedTodos(newArray)
    console.log(data, endIndex, startIndex, newArray)
      console.log('data3',data)

  }, [data])



  function pageChangeHandler(e, value) {
    console.log(value)
    setCurrentPageNumber(value)
  }

  useEffect(() => {
    let endIndex = currentPageNumber * pageSize
    let startIndex = endIndex - pageSize
    let newArray = data.slice(startIndex, endIndex)
    setPaginatedTodos(newArray)
  }, [currentPageNumber])

  return (
    <>
      <div className='title-main'>{title}</div>
      <section className='main'>
        <div className="main-container">
          {
            paginatedTodos.map((d) => {
              return (

                <Box key={d.id} {...d} className='Box-transition'></Box>
              )
            })
          }

        </div>
      </section>
      <div className='main-pagination'>
        <Pagination count={pageCount} onChange={pageChangeHandler} color='secondary' />
      </div>

    </>
  )
}