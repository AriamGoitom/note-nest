import React from 'react';
import { useState } from 'react';
import NoteForm from '../components/NoteForm';

const NewNote = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getQuote = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/random');

            if (!response.ok) {
                throw new Error('Failed to fetch quote.');
            }

            const data = await response.json();

            setQuote(data[0].q);
        } catch (error) {
            setError('Could not load a quote. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <h1>New note</h1>

            <button
                type="button"
                onClick={getQuote}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Get quote'}
            </button>

            {error && <p>{error}</p>}

            {quote && (
                <blockquote>
                    <p>{quote}</p>
                </blockquote>
            )}

            <NoteForm />
        </main>
    );
};

export default NewNote;