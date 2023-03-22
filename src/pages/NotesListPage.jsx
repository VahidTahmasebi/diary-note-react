import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterNotes from '../components/FilterNotes';
import NoteItem from '../components/NoteItem';
import { getAsyncNotes } from '../feature/notesSlice';
import Layout from '../Layout/Layout';
import { TabTitle } from '../utils/TabTitle';

const NotesListPage = ({ ...props }) => {
  TabTitle('Note list - Diary Note');

  const [filteredNotes, setFilteredNotes] = useState([]);

  const { notes, loading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  // get the data of all the notes
  useEffect(() => {
    dispatch(getAsyncNotes());
  }, []);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout {...props}>
      <div className='w-screen flex justify-center my-10'>
        <div className='lg:w-[768px] w-10/12 flex flex-col items-center'>
          {/* filter component */}
          <FilterNotes
            notes={notes}
            setFilteredNotes={setFilteredNotes}
            {...props}
          />

          <div className='w-11/12 md:w-9/12'>
            {filteredNotes.length ? (
              <span className='text-left opacity-70'>
                There are {filteredNotes.length} notes available
              </span>
            ) : (
              ''
            )}

            {/* note list */}
            <ul className='max-h-96 mt-1 px-3 rounded-xl bg-gray-700 shadow-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700'>
              {filteredNotes &&
                filteredNotes.map((note) => (
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
