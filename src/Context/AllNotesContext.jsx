import React, { createContext, useState } from "react";
import { MyAxios } from "../lib/MyAxios";

export const AllNotesContext = createContext();
const AllNotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [notesNumber, setNotesNumber] = useState(0);
  const getUserNotes = () => {
    MyAxios.get("/notes")
      .then((res) => {
        setNotes(res.data.notes);
        setNotesNumber(res.data.notes.length)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteNote=(id)=>{
    MyAxios.delete(`/notes/${id}`).then(()=>{
      getUserNotes()
    }).catch(()=>{
      console.log("error");
      
    })
  }
  return (
    <AllNotesContext.Provider  value={{getUserNotes ,notes ,deleteNote,notesNumber}}>
      {children}
    </AllNotesContext.Provider>
  );
};

export default AllNotesContextProvider;
