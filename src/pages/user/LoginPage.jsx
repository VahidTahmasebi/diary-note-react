import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { getAsyncUsers } from '../../feature/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string().required('Password is required'),
});

const LoginPage = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get users
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);

// formik submit
  const onSubmit = async (values) => {
    const { email, password } = values;

    if (users && users.length) {
      const userLogin = users.find((user) => {
        return user.email === email && user.password === password;
      });
      if (userLogin) {
        navigate('/notes-list');
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-y-14'>
      <h2>Welcome back!</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-screen flex flex-col justify-center items-center gap-y-5'
      >
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
