import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteDetails = () => {

    const { id } = useParams();
    const { notes } = useContext(NotesContext);

    const note = notes.find((note) => note.id === Number(id));

    return (
        <main>
            <h1>Note details</h1>

            {note ? (
                <article>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <p>Category: {note.category}</p>
                    <p>Created: {note.createdAt}</p>

                    <Link to={`/note/${note.id}/edit`}>Edit note</Link>
                </article>
            ) : (
                <p>Note not found</p>
            )}

            <Link to="/">Back to notes</Link>
        </main>
    );
};

export default NoteDetails;