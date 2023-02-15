import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';

const NoteItem = ({ subject }) => {
  return (
    <section className='h-screen flex flex-col justify-start items-center'>
      <Layout>
        <li className='h-7 w-1/2 bg-main-grey'>
          <div>
            <span>{subject}</span>
          </div>
        </li>
      </Layout>
    </section>
  );
};

export default NoteItem;
