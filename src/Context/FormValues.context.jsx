import { useContext, createContext, useState } from "react";

const FormValues = createContext();

const FormValuesProvider = ({ children }) => {
  const [courseName, setCourseName] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [courseUnits, setCourseUnits] = useState("");
  const [formVenues, setFormVenues] = useState("");
  const [formLevel, setFormLevel] = useState("");
  const [formDepartment, setFormDepartment] = useState([]);
  const [formDay, setFormDay] = useState(null);
  const [formTime, setFormTime] = useState(null);
  return (
    <FormValues.Provider
      value={{
        courseName,
        lecturerName,
        courseUnits,
        formVenues,
        formLevel,
        formDepartment,
        formDay,
        formTime,
        setCourseName,
        setLecturerName,
        setCourseUnits,
        setFormVenues,
        setFormLevel,
        setFormDepartment,
        setFormDay,
        setFormTime,
      }}
    >
      {children}
    </FormValues.Provider>
  );
};

const useFormValues = () => {
  const context = useContext(FormValues);

  if (context === undefined) {
    throw Error("Component is not under courses context provider");
  }
  return context;
};

export { useFormValues };
export default FormValuesProvider;
