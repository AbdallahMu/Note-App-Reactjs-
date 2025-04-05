import { createContext, useState } from "react";

export const ModalContxt = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShwModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [note, setNote] = useState(null);
  const handelCloseModal = () => {
    setIsUpdate(false)
    setNote(null)
    setShwModal(false);
  };
  const handelShowModal = () => {
    setShwModal(true);
  };
  return (
    <ModalContxt.Provider
      value={{
        showModal,
        note,
        setIsUpdate,
        handelCloseModal,
        handelShowModal,
        isUpdate,
        setNote,
      }}
    >
      {children}
    </ModalContxt.Provider>
  );
};

export default ModalContextProvider;
