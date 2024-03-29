import { useState } from "react";
import { useCourses } from "../../Context/Course.context";
import {
  Tab,
  TabPanel,
  TabsList,
  Button,
  ErrorMessage,
  Tabs,
  Span,
  SubmitButton,
} from "./ModalForm.styles";
import { FormInput, MultiSelectFormInput } from "../FormInput/FormInput";
import Stack from "@mui/material/Stack";
import { useFormValues } from "../../Context/FormValues.context";

const ModalForm = ({ setMode }) => {
  const {
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
  } = useFormValues();
  const [courseError, setCourseError] = useState("");
  const [venueError, setVenueError] = useState("");

  const { courses, setCourses, venues, setVenues } = useCourses();

  const addCourses = () => {
    if (
      !courseName ||
      !lecturerName ||
      !courseUnits ||
      !formLevel ||
      !formDepartment.length
    ) {
      return setCourseError("All fields must be filled");
    }

    if (courseUnits === 3 && formDay && formDay === "friday")
      return setCourseError("How? Like How?");

    if (courseUnits >= 2 && formTime && formTime === 12)
      return setCourseError(
        "Not a suitable time for class, break is just around the corner"
      );

    const shouldNotContinue = courses.find(
      (el) =>
        el?.courseName
          .split(/[^a-zA-Z0-9]/g)
          .join("")
          .toLowerCase() ===
        courseName
          .split(/[^a-zA-Z0-9]/g)
          .join("")
          .toLowerCase()
    );

    if (shouldNotContinue) {
      return setCourseError(`${courseName} already exists`);
    }

    const department = formDepartment.map((el) => el.value);

    const submission = {
      courseName,
      lecturerName,
      courseUnits,
      level: formLevel,
      department,
      formDay,
      formTime,
    };
    setCourses((state) => [...state, submission]);
    setCourseError("");
    setCourseName("");
    setLecturerName("");
  };

  const addVenues = () => {
    if (!formVenues) {
      return setVenueError("All fields must be filled");
    }

    const shouldNotContinue = venues.find(
      (el) =>
        el
          .split(/[^a-zA-Z0-9]/g)
          .join("")
          .toLowerCase() ===
        formVenues
          .split(/[^a-zA-Z0-9]/g)
          .join("")
          .toLowerCase()
    );

    if (shouldNotContinue) {
      return setVenueError(`${courseName} already exists`);
    }

    const submission = formVenues;
    setVenues((state) => [...state, submission]);
    setFormVenues("");
    setVenueError("");
  };

  return (
    <Tabs defaultValue={1}>
      <TabsList>
        <Tab value={1}>
          <Span onClick={() => setMode("courses")}>Courses</Span>
        </Tab>
        <Tab value={2}>
          <Span onClick={() => setMode("venues")}>Venues</Span>
        </Tab>
      </TabsList>
      <TabPanel value={1}>
        <FormInput
          value={courseName}
          changeText={setCourseName}
          label="Course Code:"
          placeholder="Enter Course Code"
        />
        <FormInput
          value={lecturerName}
          changeText={setLecturerName}
          label="Lecturer:"
          placeholder="Enter Lecturer name"
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          marginBottom={3}
          gap={3}
        >
          <FormInput
            value={courseUnits}
            changeText={setCourseUnits}
            label="Course Units:"
            placeholder="Select Course units"
            select
            options={[
              { value: 1, label: 1 },
              { value: 2, label: 2 },
              { value: 3, label: 3 },
            ]}
          />
          <FormInput
            value={formLevel}
            changeText={setFormLevel}
            label="Level for Course:"
            placeholder="Select Level"
            select
            options={[
              { value: 100, label: 100 },
              { value: 200, label: 200 },
              { value: 300, label: 300 },
              { value: 400, label: 400 },
            ]}
          />
          <FormInput
            value={formTime}
            changeText={setFormTime}
            label="Time selected"
            placeholder="Select time for class"
            select
            options={[
              { value: 8, label: "8:00" },
              { value: 9, label: "9:00" },
              { value: 10, label: "10:00" },
              { value: 11, label: "11:00" },
              { value: 12, label: "12:00" },
              { value: 14, label: "14:00" },
              { value: 15, label: "15:00" },
              { value: 16, label: "16:00" },
              { value: 17, label: "17:00" },
            ]}
          />
          <FormInput
            value={formDay}
            changeText={setFormDay}
            label="Day of the week"
            placeholder="Select day for class"
            select
            options={[
              { value: "monday", label: "Monday" },
              { value: "tuesday", label: "Tuesday" },
              { value: "wednesday", label: "Wednesday" },
              { value: "thursday", label: "Thursday" },
              { value: "friday", label: "Friday" },
            ]}
          />
          <MultiSelectFormInput
            value={formDepartment}
            onChange={setFormDepartment}
          />
        </Stack>
        {courseError && <ErrorMessage>{courseError}</ErrorMessage>}
        <Button onClick={addCourses}>Add Courses</Button>
      </TabPanel>
      <TabPanel value={2}>
        <FormInput
          value={formVenues}
          changeText={setFormVenues}
          label="Venue:"
          placeholder="Enter Venue"
        />
        {venueError && <ErrorMessage>{venueError}</ErrorMessage>}
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Button onClick={addVenues}>Add Venue</Button>
          <SubmitButton to="/create/new">Submit</SubmitButton>
        </Stack>
      </TabPanel>
    </Tabs>
  );
};

export default ModalForm;
