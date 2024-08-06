import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postFormData2 } from '../api';


const FormComponent2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = false
  const {loading,error} = useSelector((state)=>state.formReducer.state)
  const [formData, setFormData] = useState({
    fullname: '',
    Feedback: '',
    
  });

  const [localFormErrors, setLocalFormErrors] = useState({
    fullname: '',
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

  const handleChangeFeedback = (e) => {
    const { name, value } = e.target;
    onSubmit({ ...formData, [name]: value });
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!Object.values(localFormErrors).some(error => error !== '')) {
      try {
        console.log(formData)
        const resultAction = await dispatch(postFormData2(formData));
        if (postFormData2.fulfilled.match(resultAction)) {
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
    <h2 className="text-2xl text-center mb-6 font-bold">Give Feedback</h2>
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
      <label htmlFor="message" className="block text-gray-700">Your FeedBack</label>
      <textarea
        className="mt-1 block w-full p-2  rounded-xl border-gray-900"
        id="message"
        name="Feedback"
        value={formData.Feedback}
        onChange={handleChangeFeedback}
      />
    </div>
    
    <button type="submit" className="p-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 float-end m-10">
      Submit FeedBack
    </button>
  </form>
</div>

  );
};

export default FormComponent2
