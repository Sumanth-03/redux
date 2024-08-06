import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Acknowledge = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`container mx-auto mt-10 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="p-8 rounded-3xl shadow-md">
        <h2 className="text-2xl text-center mb-6 font-bold">Thank You</h2>
        <p className="text-center">We have received your message:</p>
        <ul className="mt-4 flex flex-col mb-10">
          {
            Object.entries(formData).map(([key, value]) => (
            <li key={key} className="mb-2 bg-slate-100 rounded-xl p-3">{key} : {value}</li>
          ))
          }
        </ul>
        <NavLink to='/' className='px-5 p-2 rounded-xl hover:bg-gray-300 shadow-inner float-right'>Go back to Home</NavLink>
      </div>
    </div>
  );
};

export default Acknowledge;
