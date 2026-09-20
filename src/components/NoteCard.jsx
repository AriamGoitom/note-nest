import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({note}) => {

    return (
        <article>
            <h3>
                <Link to={`/note/${note.id}`}>
                    {note.title}
                </Link>
            </h3>
            <p>{note.content}</p>
        </article>
    );
};

export default NoteCard;