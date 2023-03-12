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
      <div className='w-screen flex justify-center'>
        <div className='lg:w-[768px] w-10/12  flex flex-col items-center'>
          {/* filter component */}
          <FilterNotes
            notes={notes}
            setFilteredProducts={setFilteredProducts}
          />

          <div className='w-11/12 md:w-9/12'>
            <span className='text-left opacity-70'>
              There are {notes.length} notes available
            </span>

            {/* note list */}
            <ul className='max-h-96 mt-1 px-3 rounded-xl bg-gray-700 shadow-lg overflow-auto'>
              {filteredProducts.map((note) => (
                <NoteItem key={note.id} {...note} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotesListPage;
