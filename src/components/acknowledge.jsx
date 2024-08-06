import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Acknowledge = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`container mx-auto mt-10 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="p-8 rounded-3xl shadow-md">
        <h2 className="text-2xl text-center mb-6 font-bold">Thank You</h2>
        <p className="text-center">We have received your message:</p>
        <ul className="mt-4">
          <li><strong>Full Name:</strong> {formData.fullname}</li>
          <li><strong>Email:</strong> {formData.email}</li>
          <li><strong>Phone:</strong> {formData.phone}</li>
          <li><strong>Message:</strong> {formData.message}</li>
          <li><strong>Favorite Color:</strong> <span style={{ color: formData.color }}>{formData.color}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Acknowledge;
