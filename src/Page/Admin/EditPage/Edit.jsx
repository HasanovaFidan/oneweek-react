// import React, { useEffect, useState } from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { useParams } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Edit = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [edit, setEdit] = useState({});
//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       price: '',
//       category: '',
//     },
//     onSubmit: (values) => {
//       axios.put(`http://localhost:3000/Books/${id}`, values)
//         .then((res) => {
//           console.log(res.data);
//           toast.success('Item edited successfully', {
//             position: 'top-center',
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         },[])
//         .catch((error) => {
//           console.error('Error editing item:', error);
//           toast.error('Failed to edit item', {
//             position: 'top-center',
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         });
//     },
//   });

//   useEffect(() => {
//     axios.get(`https://northwind.vercel.app/api/products/${id}`)
//       .then((res) => {
//         setEdit(res.data);
//         setLoading(false);
//         formik.setValues({
//           title: res.data.title,
//           price: res.data.price,
//           category: res.data.category,
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching item:', error);
//         setLoading(false);
//       });
//   }, [id, formik]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='int-desing'>
//       <form className='inp-direction' onSubmit={formik.handleSubmit}>
//         <input
//           placeholder='Name'
//           className='inp'
//           id='title'
//           name='title'
//           type='text'
//           onChange={formik.handleChange}
//           value={formik.values.title}
//         />

//         <input
//           placeholder='Price'
//           className='inp'
//           id='price'
//           name='price'
//           type='text'
//           onChange={formik.handleChange}
//           value={formik.values.price}
//         />

//         <input
//           placeholder='Category'
//           className='inp'
//           id='category'
//           name='category'
//           type='text'
//           onChange={formik.handleChange}
//           value={formik.values.category}
//         />
//             <input
//           placeholder='image'
//           className='inp'
//           id='image'
//           name='image'
//           type='text'
//           onChange={formik.handleChange}
//           value={formik.values.image}
//         />
//         <button style={{width:"80px", height:"45px"}} className='btn  btn-success' type='submit'>
//           Submit
//         </button>

     
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Edit;
import React from 'react'

function Edit() {
  return (
    <div>
      
    </div>
  )
}

export default Edit
