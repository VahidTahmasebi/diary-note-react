import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupAsyncUsers } from '../../feature/usersSlice';
import { useQuery } from '../../hooks/useQuery';
import { toast } from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name length is not valid'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
    ),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const query = useQuery();
  const redirect = query.get('redirect') || '/';

  // if the user is logged in, move to the next page
  useEffect(() => {
    if (userLogin) navigate(redirect);
  }, [redirect, userLogin]);

  // profileImage handler
  const coverSelectHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = (values) => {
    const { name, email, password } = values;

    dispatch(
      signupAsyncUsers({
        id: Date.now(),
        name,
        email,
        password,
        profileImage,
      })
    );
    toast.success('Register successfully', {
      style: {
        borderRadius: '10px',
        background: '#374151',
        color: '#fff',
      },
    });
    navigate(redirect);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-y-14'>
      <h2 className='text-lg'>Let's create your account</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-screen flex flex-col justify-center items-center gap-y-3'
      >
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password confirmation'
          type='password'
        />

        {/* avatar button */}
        <div className='mb-3'>
          <input
            type='file'
            accept='.jpg, .jpeg, .png'
            name='image-upload'
            id='file'
            disabled
            onChange={coverSelectHandler}
            className='opacity-0 w-0.5 h-0.5 '
          />
          <label
            htmlFor='file'
            className='py-2 px-4 rounded-full bg-gray-400 opacity-40 text-base font-semibold shadow-md outline-none cursor-not-allowed'
            // className="hover:text-main-white hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 "
          >
            Avatar
          </label>
        </div>

        <button
          type='submit'
          disabled
          className='py-2 px-4 rounded-full bg-gray-400 opacity-40 text-base font-semibold shadow-md outline-none cursor-not-allowed'
          // className='py-2 px-4 mt-9 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
        >
          Signup
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <Link
          to={`/login?redirect=${redirect}`}
          className='text-primary-color hover:text-primary-color-hover transition ease-in duration-200 text-base font-semibold '
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
