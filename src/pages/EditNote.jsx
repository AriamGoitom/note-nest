import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const EditNote = () => {
    const { id } = useParams();
    const { notes } = useContext(NotesContext);

    const note = notes.find((note) => note.id === Number(id));

    return (
        <main>
            <h1>Edit note</h1>

            {note ? (
                <p>Editing: {note.title}</p>
            ) : (
                <p>Note not found</p>
            )}
        </main>
    );
};

export default EditNote;