import { Outlet } from "react-router-dom";

const NotesLayout = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-dvh">
      <div className="py-8 h-full items-center px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 leading-5 text-4xl font-extrabold tracking-tight  text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Capture Ideas, Anytime, Anywhere
          </h1>
          <p className="mb-6 leading-5 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Stay organized and never forget a thought. Jot down notes, create
            lists, and keep everything at your fingertips with our seamless
            Notes App.
          </p>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default NotesLayout;
