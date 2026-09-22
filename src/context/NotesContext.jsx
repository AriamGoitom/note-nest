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

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;