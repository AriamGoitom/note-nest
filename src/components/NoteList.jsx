import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({notes}) => {

    return (
        <section>
            <h2>Your notes</h2>

            {notes.map((note) => (
                <NoteCard 
                    key={note.id}
                    note={note}
                />
            ))}
        </section>
    );
};

export default NoteList;