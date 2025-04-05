import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AllNotesContext } from "../../Context/AllNotesContext";

const MainLayout = () => {
  const { notesNumber } = useContext(AllNotesContext);
  const [mdScreen, setMdScreen] = useState(window.innerWidth <= 1024);
  const [colappes, setColappes] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setMdScreen(true);
      } else {
        setMdScreen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("loadstart", handleResize);
  }, []);
  return (
    <>
      <div className=" text-white text-lg text-center bg-blue-400 w-full py-4 flex lg:block justify-between px-10 lg:px-0 items-center">
        {mdScreen ? (
          <i
            onClick={() => {
              setColappes(true);
            }}
            className="fa-solid fa-bars-staggered "
          ></i>
        ) : (
          ""
        )}
        <h1>
          Note App :{" "}
          <span className="font-bold text-[19px]">{notesNumber}</span>{" "}
        </h1>
      </div>
      <div className="w-full">
        {mdScreen ? (
          colappes ? (
            <div
              onClick={() => {
                setColappes(false);
              }}
              className="absolute bg-gray-400 top-0 left-0 right-0 bottom-0 bg-opacity-25"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="Sidebar fixed left-0 top-0 bottom-0 bg-sky-950 min-w-fit "
              >
                <div className=" h-1/3 flex flex-col p-5 align-middle justify-between">
                  <div className="text-[30px] text-white">
                    <i className="fa-solid fa-note-sticky text-white"></i> Notes
                  </div>
                  <div className="text-[20px] text-white">
                    <ul>
                      <li className="my-4">
                        <i className="fa-solid fa-house"></i> Home
                      </li>
                      <li
                        onClick={() => {
                          localStorage.clear();
                          navigate("/login");
                        }}
                        className="my-4"
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>{" "}
                        LogOut
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        ) : (
          <div className="Sidebar fixed left-0 top-0 bottom-0 bg-sky-950 w-2/12 ">
            <div className=" h-1/3 flex flex-col p-5 align-middle justify-between">
              <div className="text-[30px] text-white">
                <i className="fa-solid fa-note-sticky text-white"></i> Notes
              </div>
              <div className="text-[20px] text-white">
                <ul>
                  <li className="my-4">
                    <i className="fa-solid fa-house"></i> Home
                  </li>
                  <li
                    onClick={() => {
                      localStorage.clear();
                      navigate("/login");
                    }}
                    className="my-4"
                  >
                    <i className="fa-solid fa-right-from-bracket"></i> LogOut
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="lg:pl-72">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
