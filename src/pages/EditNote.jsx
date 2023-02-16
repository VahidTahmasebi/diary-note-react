import Layout from '../Layout/Layout';
import React from 'react';
import { useLocation } from 'react-router-dom';
const EditNote = () => {
  const location = useLocation();
  const { subject, textarea } = location.state.note;
  return (
    <section className='h-screen flex flex-col justify-start items-center'>
      <Layout>
        <div>{subject}</div>
        <div>{textarea}</div>
      </Layout>
    </section>
  );
};

export default EditNote;
