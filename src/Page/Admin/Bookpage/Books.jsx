import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./add.css"

function Books() {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      category: '',
    },
    onSubmit: (values) => {
      axios.post('http://localhost:3000/Books', { ...values }).then((res) => {
        console.log(res);
        toast.success('Book added successfully', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    },
  });

  return (
    <div className='int-desing'>
      <form className='inp-direction' onSubmit={formik.handleSubmit}>
        <input
          placeholder='name'
          className='inp'
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          placeholder='Price'
          className='inp'
          id='price'
          name='price'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <input
          placeholder='Category'
          className='inp'
          id='category'
          name='category'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.category}
        />
    <input
          placeholder='image'
          className='inp'
          id='image'
          name='image'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        <button style={{width:"80px", height:"45px"}} className='btn  btn-success' type='submit'>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Books;
