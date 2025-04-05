const FormInput = ({item , formik}) => {
  return (
    <div  className=""> 
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={item.id}
      >
        {item.label}:
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={item.type}
        id={item.id}
        name={item.name}
        placeholder={item.placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        defaultValue={formik.values[item.name] || ""}
      />
       {formik.touched[item.name] && formik.errors[item.name] && (
        <p className="mt-2 text-sm text-red-500">{formik.errors[item.name]}</p>
      )}
    </div>
  );
};

export default FormInput;
