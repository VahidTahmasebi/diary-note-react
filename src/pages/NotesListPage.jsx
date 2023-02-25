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
    <Layout>
      <div className=''>There are {notes.length} more notes left</div>
      {/* tags */}
      <select name='tags' id='tags' className='text-black'>
        <option value=''>All</option>
        {notes.map((task, i) => {
          return (
            <option value={task.tags} key={i}>
              {task.tags}
            </option>
          );
        })}
      </select>
      {/* note list */}
      <div className=' w-screen flex flex-col items-center'>
        <ul className='my-16 h-96 w-2/6 px-3 overflow-auto'>
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default NotesListPage;
