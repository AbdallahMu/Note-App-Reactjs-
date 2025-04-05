import { useContext, useEffect } from "react";
import Note from "../Note/Note";
import { AllNotesContext } from "../../Context/AllNotesContext";

const Notes = () => {
  const { notes, getUserNotes } = useContext(AllNotesContext);
  useEffect(() => {
    getUserNotes();
  }, []);
  return (
    <div className="w-full flex flex-wrap p-4">
      {notes.length==0? <h1 className="text-center w-full text-[100px]">Add Your Note Now</h1>:   notes.map((item, index) => (
        <Note note={item} key={index} />
      ))}
    </div>
  );
};

export default Notes;
