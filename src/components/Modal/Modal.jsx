import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import { MyAxios } from "../../lib/MyAxios";
import { AllNotesContext } from "../../Context/AllNotesContext";
import { ModalContxt } from "../../Context/ModalContext";
const Modal = () => {
  const { getUserNotes } = useContext(AllNotesContext);
  const {note,isUpdate , handelCloseModal}= useContext(ModalContxt) 
  const initialValues = {
    title: note ? note.title : "",
    content: note ? note.content : "",
  };
  const validationSchema = new Yup.object({
    title: Yup.string().min(4).max(10).required(),
    content: Yup.string().min(10).required(),
  });
  const fields = [
    {
      type: "text",
      id: "title",
      name: "title",
      placeholder: "Enter title..",
      label: "title",
    },
    {
      type: "text",
      id: "content",
      name: "content",
      placeholder: "Enter content..",
      label: "content",
    },
  ];
  const onSubmit = (values) => {
    if (isUpdate) {
      MyAxios.put(`/notes/${note._id}`, values)
        .then(() => {
          handelCloseModal();
          getUserNotes();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      MyAxios.post(`/notes`, values)
        .then(() => {
          handelCloseModal();
          getUserNotes();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="absolute bg-opacity-30 top-0 left-0 right-0 bottom-0 flex justify-center">
      <form
        className="shadow-lg w-1/2 p-3 md:p-10 bg-white h-fit my-7 rounded-lg"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-end">
          <i
            onClick={handelCloseModal}
            className="fa-solid fa-circle-xmark hover:cursor-pointer"
          ></i>
        </div>
        {fields.map((item, index) => {
          return <FormInput formik={formik} item={item} key={index} />;
        })}
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="btn my-3 w-full"
        >
          {isUpdate ? "Update" : "Add"} Note
        </button>
      </form>
    </div>
  );
};

export default Modal;
