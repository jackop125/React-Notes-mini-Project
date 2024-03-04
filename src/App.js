import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import CreateNotes from "./CreateNotes";
import NotesContainer from "./NotesContainer";
function App() {
  const [NotesDATA, setNotesDATA] = useState([
    {
      NoteTitle: "what is programming",
      NoteData:
        "programming is process of automating hardware to work according as we desire",
    }
  ]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <CreateNotes Data={NotesDATA} updateData={setNotesDATA}/>
        <hr/>
        <NotesContainer Data={NotesDATA} updateData={setNotesDATA}/>
      </div>
    </>
  );
}

export default App;
