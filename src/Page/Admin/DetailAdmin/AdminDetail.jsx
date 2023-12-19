import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Detail.css"

function AdminDetail() {
    const { id } = useParams()
    console.log(id)
    const [item, setItem] = useState({})
    useEffect(() => {
      axios.get(`http://localhost:3000/Books/${id}`).then(res => {
        setItem(res.data);
        window.scrollTo(0, 0);
      },[])
    
    }, [])

    return (
        <div> 
            <div className="car">
                <div className="card-bb">
       <div className="left-img">
       <img src={item.image} alt={item.title} />
       </div>
                 <div className="right-word">
                 <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.category}</p>
                 </div>

                   
                </div>
            </div>
        </div>
       
    )
}

export default AdminDetail;

