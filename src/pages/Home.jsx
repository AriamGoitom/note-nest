import React from 'react';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteList from '../components/NoteList';

const Home = () => {

    const { notes } = useContext(NotesContext);

    return (
        <main>
            <h1>Note Nest</h1>
            <p>Total notes: {notes.length}</p>

            <NoteList notes={notes} />
        </main>
    );
};

export default Home;