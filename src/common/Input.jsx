import React from 'react';

const Input = ({ label, name, formik, type = 'text' }) => {
  return (
    <div className='lg:w-2/12 flex flex-col justify-between'>
      <label htmlFor={name} className='opacity-70 mb-1'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        disabled
        {...formik.getFieldProps(name)}
        className='w-full p-2 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200 cursor-not-allowed'
      />
      <div className='h-4 pt-1'>
        {formik.errors[name] && formik.touched[name] && (
          <div className='text-red-300'>{formik.errors[name]}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
