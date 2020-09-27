import React from "react";
import "./App.css";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

function App() {
  const notes: string[] = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => dispatch(addNote(note));

  return (
    <div className="App">
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
        <li>Some note</li>
      </ul>
    </div>
  );
}

export default App;
