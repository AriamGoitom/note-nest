import React from 'react';

const NoteList = ({notes}) => {

    return (
        <section>
            <h2>Your notes</h2>

            {notes.map((note) => (
                <article key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </article>
            ))}
        </section>
    );
};

export default NoteList;