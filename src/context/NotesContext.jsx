import { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");

        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => {
        setNotes((currentNotes) => [
            ...currentNotes,
            note
        ]);
    };

    const deleteNote = (id) => {
        setNotes((currentNotes) =>
            currentNotes.filter((note) => note.id !== id)
        );
    };

    const updateNote = (updatedNote) => {
        setNotes((currentNotes) => 
            currentNotes.map((note) =>
                note.id === updatedNote.id ? updatedNote : note
            )
        );
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;