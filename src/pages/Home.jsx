import React from 'react';
import { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteList from '../components/NoteList';

const Home = () => {

    const { notes } = useContext(NotesContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            <h1>Note Nest</h1>
            <p>Total notes: {notes.length}</p>

            <input 
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {filteredNotes.length > 0 ? (
                <NoteList notes={filteredNotes} />
            ) : (
                <p>No notes found</p>
            )}
        </main>
    );
};

export default Home;