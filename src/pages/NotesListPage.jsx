import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from '../components/NoteItem';
import Layout from '../Layout/Layout';

const NotesListPage = () => {
  const { notes, loading, error } = useSelector((state) => state.notes);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>error ...</p>;

  return (
    <section className='h-screen flex flex-col justify-start items-center'>
      <Layout>
        <div>
          <ul>
            {notes.map((note) => (
              <NoteItem id={note.id} {...note} />
            ))}
          </ul>
        </div>
      </Layout>
    </section>
  );
};

export default NotesListPage;
