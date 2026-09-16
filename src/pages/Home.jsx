import React from 'react';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const Home = () => {

    const { notes } = useContext(NotesContext);

    return (
        <main>
            <h1>Note Nest</h1>
            <p>Total notes: {notes.length}</p>
        </main>
    );
};

export default Home;