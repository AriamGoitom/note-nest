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

    return (
        <NotesContext.Provider value={{ notes, addNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;