import { useContext, useState } from "react";
import Notes from "../../Notes/Notes";
import Modal from "../../Modal/Modal";
import { ModalContxt } from "../../../Context/ModalContext";

const Home = () => {
  const {showModal ,handelShowModal} = useContext(ModalContxt)
  return (
    <>
      <div className="px-3">
        <div className="flex justify-end">
          <button onClick={handelShowModal} className="py-3 px-5 bg-sky-950 text-white rounded-lg my-3">
            Add
          </button>
        </div>
        <Notes />
      </div>
      {showModal&&<Modal/>}
    </>
  );
};

export default Home;
