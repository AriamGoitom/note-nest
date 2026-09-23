import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NoteDetails from './pages/NoteDetails';
import Navigation from './components/Navigation';
import EditNote from './pages/EditNote';
import './App.css'

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/note/:id" element={<NoteDetails />} />
        <Route path="/note/:id/edit" element={<EditNote />} />
      </Routes>
    </>
  );
};

export default App
