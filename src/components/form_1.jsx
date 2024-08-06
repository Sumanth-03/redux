import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postFormData } from '../api';


const FormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = false
  const {loading,error} = useSelector((state)=>state.formReducer.state)
  console.log(loading,error)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
    color:"#ffffff"
  });

  const [localFormErrors, setLocalFormErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
  });

  const onSubmit = (data) => {
    setFormData(data);
  };

  const handleChangeName = (e) => {
    setLocalFormErrors((pre)=>{
      return {...pre , fullname:''}
    })

    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });

    // validate Name 
    if (!/^[a-zA-Z ]{2,}$/.test(value)){
      setLocalFormErrors((pre)=>{
        return {...pre , fullname:'Name is in-valid'}
      })
    }
  };

  const handleChangeEmail = (e) => {
    setLocalFormErrors((pre)=>{
      return {...pre , email:''}
    })  

    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });

    // Validate email
    if (!/\S+@\S+\.\S+/.test(value)) {
      setLocalFormErrors((pre)=>{
        return {...pre , email:'email is in-valid'}
      })
    }
  }

  const handleChangephone = (e) => {
    setLocalFormErrors((pre)=>{
      return {...pre , phone:''}
    }) 

    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });

     // Validate phone number
     if (!/^\d{10}$/.test(value)) {
      setLocalFormErrors((pre)=>{
        return {...pre , phone:'phone is in-valid'}
      })
    }
  }

  const handleChangemessage = (e) => {
    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });
  }

  const handleChangecolor = (e) => {
    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!Object.values(localFormErrors).some(error => error !== '')) {
      try {
        console.log(formData)
        const resultAction = await dispatch(postFormData(formData));
        if (postFormData.fulfilled.match(resultAction)) {
          console.log(resultAction)
          navigate('/acknowledge', { state: { formData: resultAction.payload } });
        } else {
          console.error('Failed to submit form:', resultAction.payload);
        }
      } catch (error) {
        console.error('There was an error submitting the form!', error);
      }
    };
  }
  if(loading){
    return(
      <div className='flex flex-col justify-center items-center mt-10 h-screen'>
      <h1 className="">loading...</h1>
      </div>
    )
  }
  return (
    <div className="container mx-auto mt-10">
  <form onSubmit={handleSubmit} className="bg-blue-100 p-8 rounded-3xl shadow-md">
    <h2 className="text-2xl text-center mb-6 font-bold">Contact Us</h2>
    <div className="mb-4">
      <label htmlFor="fullname" className="block text-gray-700">Full Name</label>
      <input
        type="text"
        className={`mt-1 block w-full p-2 border focus:outline-none rounded-md  ${localFormErrors.fullname ? 'border-red-900' : 'border-gray-300'}`}
        id="fullname"
        name="fullname"
        value={formData.fullname}
        onChange={handleChangeName}
      />
      {localFormErrors.fullname && (
        <p className="text-red-500 text-sm mt-1">{localFormErrors.fullname}</p>
      )}
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700">Email</label>
      <input
        type="email"
        className={`mt-1 block w-full p-2  border-gray-300 rounded-md ${localFormErrors.email ? 'border-red-500' : 'border-gray-300'}`}
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChangeEmail}
      />
      {localFormErrors.email && (
        <p className="text-red-500 text-sm mt-1">{localFormErrors.email}</p>
      )}
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="block text-gray-700">Phone</label>
      <input
        type="text"
        className={`mt-1 block w-full p-2  focus:outline-none rounded-md ${localFormErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChangephone}
      />
      {localFormErrors.phone && (
        <p className="text-red-500 text-sm mt-1">{localFormErrors.phone}</p>
      )}
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-gray-700">Message</label>
      <textarea
        className="mt-1 block w-full p-2  rounded-xl border-gray-900"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChangemessage}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="color" className="block text-gray-700">Color</label>
      <input
        type="color"
        className="mt-1 block w-16 p-0 border rounded-md border-gray-300"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChangecolor}
      />
    </div>
    <button type="submit" className="p-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
      Submit
    </button>
  </form>
</div>

  );
};

export default FormComponent
