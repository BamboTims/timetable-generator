import { useState } from "react";
import ModalForm from "../../Components/Modal/ModalForm";
import { Flex, Side, Form } from "./Form.styles";
import { useCourses } from "../../Context/Course.context";
import CourseItem from "../../Components/CourseItem/CourseItem";

const FormScreen = () => {
  const [mode, setMode] = useState("courses");
  const { courses, venues } = useCourses();

  return (
    <Flex>
      <Side>
        {mode === "courses" &&
          courses.map((el, i) => {
            return <CourseItem key={i} item={el} />;
          })}
        {mode === "venues" &&
          venues.map((el, i) => {
            return <CourseItem key={i} item={el} />;
          })}
        {mode === "venue" && <h1>Venue</h1>}
      </Side>
      <Form>
        <ModalForm setMode={setMode} />
      </Form>
    </Flex>
  );
};

export default FormScreen;
