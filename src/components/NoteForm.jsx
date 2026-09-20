import React from 'react';
import {useState} from 'react';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    
    return (
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    id="content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
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