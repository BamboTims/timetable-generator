import { useState, useContext, createContext } from "react";
import {
  courses as testCourses,
  venues as dataVenues,
  days as dataDays,
} from "../test/testData";

const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  const [days, setDays] = useState(dataDays);
  const [courses, setCourses] = useState(testCourses);
  const [venues, setVenues] = useState(dataVenues);

  return (
    <CoursesContext.Provider
      value={{ courses, setCourses, venues, setVenues, days, setDays }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

const useCourses = () => {
  const context = useContext(CoursesContext);

  if (context === undefined) {
    throw Error("Component is not under courses context provider");
  }
  return context;
};

export { useCourses };
export default CoursesContextProvider;
