import './Box.css'
import { Link, useRoutes } from 'react-router-dom'


export default function Box({id,name,price,imageSrc}){


  return(
    <>
        <Link to={`/${id}`} className="box">
            <div className="box-top">
                <img src={imageSrc} alt="" className="box-top-img" />
            </div>
            <div className="box-bottom">
                <div className="box-bottom-foodName">
                    <span className='box-bottom-foodName-titleText'>نام:</span>
                    <span className='box-bottom-foodName-nameText'>{name}</span>
                </div>
                <div className="box-bottom-price">
                    <span className='box-bottom-price-titleText'>قیمت:</span>
                    <pre className='box-bottom-price-priceText'>{price} تومان</pre>
                </div>
            </div>
        </Link>
    </>
  )
}