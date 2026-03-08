import { useContext, useRef, useState, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

export default function AddNote() {
  const { notes, setNotes } = useContext(NotesContext);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addNote = () => {
    if (text.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: text
    };

    setNotes([...notes, newNote]);
    setText("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write note"
      />

      <button onClick={addNote}>Add Note</button>
    </div>
  );
}