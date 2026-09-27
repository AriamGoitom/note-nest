# Note Nest

Note Nest is a responsive note-taking application built with React and Vite. The application allows users to create, view, edit, search, filter, sort and delete notes. Notes are persisted in the browser using `localStorage`, allowing them to remain available after page reloads.

The project focuses on React fundamentals, component-based development, routing, shared state, form handling, API integration, data persistence, error handling, responsive design and maintainable development practices.

## Features

* Create new notes
* Edit existing notes
* Delete notes with confirmation
* View individual note details
* Search notes by title and content
* Filter notes by category
* Sort notes by creation date
* Categorize notes
* Form validation for required fields
* Persistent note storage using `localStorage`
* Graceful handling of invalid or corrupted localStorage data
* Empty states when no notes or search results are available
* Loading and error states when fetching quotes
* Random quote integration using the ZenQuotes API
* Responsive layout for desktop and mobile screens
* Client-side navigation using React Router

## Technologies

* React
* Vite
* React Router
* React Context API
* JavaScript
* HTML
* CSS
* Fetch API
* Browser `localStorage`
* ZenQuotes API

## Getting Started

```bash
git clone <repository-url>
cd <project-name>
npm install
npm run dev
```

Open the URL shown in the terminal, usually http://localhost:5173.

## API Integration

The application integrates with the [ZenQuotes API](https://zenquotes.io/) to provide a random quote when creating a new note.
During development, Vite's proxy configuration forwards requests to the API without requiring a separate backend server.

## Requirements Fulfilled

### Extended Requirements

The project also includes the following extended requirements:

* Extended error handling
* Responsive design
* Extended application functionality
* Maintained and incremental Git commit history

### Extended Functionality

Beyond basic note creation and editing, the application provides:

* Search by title and content
* Category filtering
* Sorting by creation date
* Note details view
* Delete confirmation
* Random quote integration
* Data persistence between page loads

## Created by

Ariam Goitom