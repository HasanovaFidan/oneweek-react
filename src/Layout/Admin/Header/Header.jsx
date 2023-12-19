import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import DataContexs from '../../../Contexts/Contexts'
import { Toast } from 'flowbite-react'
import { toast } from 'react-toastify'

function Header() {
    let { data, setData, original, setOriginal } = useContext(DataContexs)
    const handleChange = (e) => {
        
        let search = e.target.value.trim().toLowerCase()
        console.log(search)
        if (search == "") {
            setData([...original])
           
        }
        else {
            let searchingData = data.filter(item => item.title.trim().toLowerCase().includes(search))
            setData([...searchingData])
         
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        let sorted = [...data].sort((a, b) => a.price - b.price);
        setData([...sorted]);
        toast.info("sorted from low price to high price")
    };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link  to={""}>Home Admin</Link>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link to={"/"} class="nav-link" href="">Home Page <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/admin/books'}>Add Data</Link>
                        </li>
                        <li class="nav-item">
                       
                        </li>
                    </ul>
                    <form class="flexx">
                        <input onChange={(e)=>handleChange(e)} className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button onClick={(e) => handleClick(e)} className=" button btn btn-outline-success">Sort</button>
                    </form>
                </div>
            </nav>
            <Toast/>
        </div>
    )
}

export default Header
