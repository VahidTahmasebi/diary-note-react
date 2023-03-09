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
      <div>
        <div className=''>There are {notes.length} more notes left</div>

        {/* filter component */}
        <FilterNotes notes={notes} setFilteredProducts={setFilteredProducts} />

        {/* note list */}
        <div className=' w-screen flex flex-col items-center'>
          <ul className='my-16 h-96 w-2/6 px-3 overflow-auto'>
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
