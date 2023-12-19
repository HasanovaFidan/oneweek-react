import React, { useContext } from 'react'
import DataContexs from '../../../Contexts/Contexts'
import "./Children.css"
import { Link } from 'react-router-dom'
function Children() {
  let { data, setData } = useContext(DataContexs)
  return (
    <div>
      <div className="cont__div">
        <h4>CHILDREN'S BOOKS</h4>
        <div className="boss"></div>
      </div>
      <div className="container">
        <div className="childrenbooks">
          {
            data.slice(14, 20).map((item, index) => (
              <div key={index} className="child ">
                <div className="righer">
                  <img src={item.image} className='img' alt="" />
                </div>
                <div className="lefter">
                  <p>{item.description}</p>
                  <Link to={`/${item.id}`}><p >{item.title}</p></Link>
                  <p>{item.price}</p>
                </div>

              </div>
            ))
          }

        </div>
      </div>
      <div className="container">
        <div className="karts">
          <div className="kartinki__child">
            <h4 style={{ fontFamily: "revert", fontWeight: "bold" }}>BUY 3. GET FREE 1.</h4>
            <p>50% of for selected  product in Pustok</p>
            <div className="btn__for">
              <button>See More</button>
            </div>
          </div>
          <div className="child__kartinki">
            <img src="https://demo.hasthemes.com/pustok-preview/pustok/image/bg-images/promo-banner-small.jpg" alt="" />
            <div className="yazi">
              <p>$26.00</p>
              <h4>Praise For <br /> The Night Child</h4>
              <button>Buy Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Children
