import React from 'react';

const NoteCard = ({note}) => {

    return (
        <article>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
        </article>
    );
};

export default NoteCard;