import React, { useContext } from 'react';
import DataContexs from '../../../Contexts/Contexts';
import axios from 'axios';
import { Toast } from 'flowbite-react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Table() {
  let { data, setData, loading } = useContext(DataContexs);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/Books/${id}`).then(() => {
      const deleteTable = data.filter((item) => item.id !== id);
      setData([...deleteTable]);
      toast.error('Item Deleted');
    },[]);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
<table class="table table-sm">
          <thead >
            <tr>
            <th className='text-center' scope="col">Image</th>
              <th className='text-center' scope="col">name</th>
              <th className='text-center' scope="col">Description</th>
              <th className='text-center' scope="col">Price</th>
              <th className='text-center' scope="col">Category</th>
              <th className='text-center' scope="col">Delete</th>
              <th className='text-center' scope="col">Detail</th>
              <th className='text-center' scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (

              <tr key={index}>
                   <td className='text-center'>
                  <img   src={item.image} alt={item.title} style={{ width: '100px', height: '120px' }} />
                </td>
                <td className='text-center'>{item.title}</td>
                <td className='text-center'>{item.description}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>{item.category}</td>
             
                <td className='text-center'>
                  <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
                <td className='text-center'>
                  <Link to={`detail/${item.id}`}>
                    <button className="btn btn-info">Detail</button>
                  </Link>
                </td>
                <td className='text-center'>
                  {/* <Link to={`edit/${item.id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Toast />
    </>
  );
}

export default Table;
