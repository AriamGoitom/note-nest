import { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
        try {
            const savedNotes = localStorage.getItem("notes");

            if (!savedNotes) {
                return [];
            }

            const parsedNotes = JSON.parse(savedNotes);

            if (!Array.isArray(parsedNotes)) {
                return [];
            }
            return parsedNotes;
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("notes", JSON.stringify(notes));
        } catch {
            return;
        }
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