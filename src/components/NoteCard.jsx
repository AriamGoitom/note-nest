import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteCard = ({note}) => {

    const { deleteNote } = useContext(NotesContext);

    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this note?');

        if (confirmed) {
            deleteNote(note.id);
        }
    };

    return (
        <article>
            <h3>
                <Link to={`/note/${note.id}`}>
                    {note.title}
                </Link>
            </h3>
            <p>{note.content}</p>

            <button type="button" onClick={handleDelete}>Delete</button>
        </article>
    );
};

export default NoteCard;