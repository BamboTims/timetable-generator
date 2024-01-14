import { useState } from "react";
import ModalForm from "../../Components/Modal/ModalForm";
import { Flex, Side, Form } from "./Form.styles";
import { useCourses } from "../../Context/Course.context";
import CourseItem from "../../Components/CourseItem/CourseItem";
import FormValuesProvider from "../../Context/FormValues.context";

const FormScreen = () => {
  const [mode, setMode] = useState("courses");
  const { courses, venues } = useCourses();

  return (
    <FormValuesProvider>
      <Flex>
        <Side>
          {mode === "courses" &&
            courses.map((el, i) => {
              return <CourseItem key={i} item={el} />;
            })}
          {mode === "venues" &&
            venues.map((el, i) => {
              return <CourseItem venues={true} key={i} item={el} />;
            })}
        </Side>
        <Form>
          <ModalForm setMode={setMode} />
        </Form>
      </Flex>
    </FormValuesProvider>
  );
};

export default FormScreen;
