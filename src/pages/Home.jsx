import React from 'react';
import { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteList from '../components/NoteList';

const Home = () => {

    const { notes } = useContext(NotesContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredNotes = notes.filter((note) => {
        const matchesSearch =
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === '' || note.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

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

            <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
            >
                <option value="">All categories</option>
                <option value="School">School</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
                <option value="Other">Other</option>
            </select>

            {filteredNotes.length > 0 ? (
                <NoteList notes={filteredNotes} />
            ) : (
                <p>No notes found</p>
            )}
        </main>
    );
};

export default Home;