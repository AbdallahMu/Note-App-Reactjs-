import { RouterProvider } from "react-router-dom";
import { routes } from "./lib/routes";
import { ToastContainer } from "react-toastify";
import AllNotesContextProvider from "./Context/AllNotesContext";
import ModalContextProvider from "./Context/ModalContext";

const App = () => {
  return (
    <ModalContextProvider>
      <AllNotesContextProvider>
        <RouterProvider router={routes} />
        <ToastContainer />
      </AllNotesContextProvider>
    </ModalContextProvider>
  );
};

export default App;
