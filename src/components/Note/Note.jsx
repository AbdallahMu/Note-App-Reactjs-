import { useContext } from "react";
import { AllNotesContext } from "../../Context/AllNotesContext";
import { ModalContxt } from "../../Context/ModalContext";

const Note = ({ note }) => {
const {deleteNote} = useContext(AllNotesContext)
  const {setIsUpdate,handelShowModal, setNote}= useContext(ModalContxt) 

  return (
    <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4  ">
      <div className=" m-2 shadow-xl bg-white rounded-lg border border-gray-200 p-5">
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          {note.title}
        </h1>
        <p className="text-gray-600 mb-4">{note.content}</p>

        <div className="flex justify-between">
          <button
            className="btn"
            onClick={() => {
              setIsUpdate(true);
              setNote(note)
              handelShowModal()
            }}
          >
            Update
          </button>
          <button
            className="btn-delete"
            onClick={() => deleteNote(note._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
