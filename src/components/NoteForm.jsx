import React from 'react';
import { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteForm = () => {

    const { addNote } = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            setError('Title is required.');
            return;
        }

        if (!content.trim()) {
            setError('Content is required.');
            return;
        }

        setError('');

        const newNote = {
            id: Date.now(),
            title: title,
            content: content,
            category: category,
            createdAt: new Date().toISOString()
        };

        addNote(newNote);

        setTitle('');
        setContent('');
        setCategory('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}

            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        setError('');
                    }}
                />
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    id="content"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                        setError('');
                    }}
                />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>

            <button type="submit">Create note</button>
        </form>
    );
};

export default NoteForm;