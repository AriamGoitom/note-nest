import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({notes}) => {

    return (
        <section className="note-list">
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