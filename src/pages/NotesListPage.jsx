import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteItem from '../components/NoteItem';
import { getAsyncNotes } from '../feature/notesSlice';
import Layout from '../Layout/Layout';

const NotesListPage = () => {
  const { notes, loading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncNotes());
  }, []);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='h-screen flex flex-col justify-start items-center'>
      <Layout>
        <div>
          <ul>
            {notes.map((note) => (
              <NoteItem key={note.id} {...note} />
            ))}
            {/* test */}
            <li className='h-7 w-96 bg-main-grey'>
              <div>
                <span>123</span>
              </div>
            </li>
          </ul>
        </div>
      </Layout>
    </section>
  );
};

export default NotesListPage;
