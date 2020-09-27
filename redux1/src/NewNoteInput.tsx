import React from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteclick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input onChange={updateNote} type="text" name="note" placeholder="Note" />
      <button onClick={onAddNoteclick}>Add note</button>
    </div>
  );
};
