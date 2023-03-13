import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { getAsyncUsers } from '../../feature/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

const initialValues = {
  email: 'BrendanEich@diaryNote.com',
  password: 'BrendanEich@diaryNote.com',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string().required('Password is required'),
});

const LoginPage = () => {
  const [userLogin, setUserLogin] = useState(false);

  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const redirect = query.get('redirect') || '/';

  // get local storage values
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('authState')) || false;
    setUserLogin(userData);
  }, []);

  // if the user is logged in, move to the next page
  useEffect(() => {
    if (userLogin) navigate(redirect);
  }, [redirect, userLogin]);

  // get users
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);

  // formik submit
  const onSubmit = async (values) => {
    const { email, password } = values;

    // checking the authenticity of the user
    if (users && users.length) {
      const userLogin = users.find((user) => {
        return user.email === email && user.password === password;
      });

      // store local values
      localStorage.setItem('authState', JSON.stringify(userLogin));
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
      <h2 className='text-lg'>Welcome back!</h2>
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

        <button
          type='submit'
          className='py-2 px-4 mt-9 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
        >
          Login
        </button>
      </form>
      <p>
        Don't you have an account?{' '}
        <Link
          to={`/signup?redirect=${redirect}`}
          className='text-primary-color hover:text-primary-color-hover transition ease-in duration-200 text-base font-semibold '
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
