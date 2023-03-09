import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterNotes from '../components/FilterNotes';
import NoteItem from '../components/NoteItem';
import { getAsyncNotes } from '../feature/notesSlice';
import Layout from '../Layout/Layout';

const NotesListPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { notes, loading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncNotes());
  }, []);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <div className='w-6/12 flex justify-center'>
        <div className='w-4/6 flex flex-col items-center'>
          {/* filter component */}
          <FilterNotes
            notes={notes}
            setFilteredProducts={setFilteredProducts}
          />

          <div className='w-11/12'>
            <span className='text-left text-slate-400'>
              There are {notes.length} notes available
            </span>
          </div>

          {/* note list */}
          <ul className='w-full h-96 px-3 overflow-auto'>
            {filteredProducts.map((note) => (
              <NoteItem key={note.id} {...note} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default NotesListPage;
