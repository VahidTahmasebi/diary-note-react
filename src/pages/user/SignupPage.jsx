import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singupAsyncUsers } from '../../feature/usersSlice';

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

  const onSubmit = (values) => {
    const { name, email, password } = values;

    dispatch(
      singupAsyncUsers({
        name,
        email,
        password,
      })
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-y-14'>
      <h2>Let's create your account</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-screen flex flex-col justify-center items-center gap-y-5'
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
        <button type='submit'>Signup</button>
      </form>
      <p>
        Already have an account? <Link>Sign in</Link>
      </p>
    </div>
  );
};

export default SignupPage;
