import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const EditNote = () => {
    const { id } = useParams();
    const { notes } = useContext(NotesContext);

    const note = notes.find((note) => note.id === Number(id));

    return (
        <main>
            <h1>Edit note</h1>

            {note ? (
                <NoteForm note={note} />
            ) : (
                <p>Note not found</p>
            )}
        </main>
    );
};

export default EditNote;