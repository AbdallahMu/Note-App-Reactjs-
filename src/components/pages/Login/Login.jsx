import { Link } from "react-router-dom";
import useLoginForm from "../../../Hooks/useLoginForm";
import FormInput from "../../FormInput/FormInput";

const Login = () => {
  const { formik, fields, loading, apiError } = useLoginForm();
  return (
    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Log in
      </h2>
      <form className=" " onSubmit={formik.handleSubmit}>
        {fields.map((item, index) => {
          return <FormInput formik={formik} item={item} key={index} />;
        })}
        <div className="my-5 flex justify-end">
          <Link to={"/signup"} className="text-blue-500">
            Dont have an account{" "}
          </Link>
        </div>
        {apiError && (
          <div className="bg-red-300 rounded-lg text-white p-4 ">
            {apiError}
          </div>
        )}

        <div className="text-center my-2">
          <button
            disabled={!formik.isValid || loading}
            className="btn w-1/2 text-[20px]"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
