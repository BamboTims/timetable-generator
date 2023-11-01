import { useState, useRef } from "react";
import { Popper } from "@mui/base/Popper";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { styled } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import { useCourses } from "../../Context/Course.context";

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${(props) => (props.remove ? "red" : "black")};
`;

const Popup = styled(Popper)({
  zIndex: 1000,
});

const CourseItem = ({ item, venues }) => {
  const { setCourses, setVenues } = useCourses();

  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      setOpen(false);
    } else if (event.key === "Escape") {
      buttonRef.current.focus();
      setOpen(false);
    }
  };

  const removeItem = () => {
    if (venues) {
      handleClose();
      return setVenues((state) => state.filter((el) => el !== item));
    }
    handleClose();
    return setCourses((state) =>
      state.filter((el) => el?.courseName !== item?.courseName)
    );
  };

  return (
    <div>
      <StyledButton
        ref={buttonRef}
        id="composition-button"
        aria-controls={"composition-menu"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        size="lg"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {item?.courseName ? item?.courseName : item}
      </StyledButton>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: "md" }}
          >
            {item?.lecturerName && (
              <StyledMenuItem onClick={handleClose}>
                {" "}
                Lecturer: {item?.lecturerName}
              </StyledMenuItem>
            )}
            {item?.courseUnits && (
              <StyledMenuItem onClick={handleClose}>
                {" "}
                Units : {item?.courseUnits}
              </StyledMenuItem>
            )}
            {item?.level && (
              <StyledMenuItem onClick={handleClose}>
                {" "}
                Level : {item?.level}
              </StyledMenuItem>
            )}
            {item?.department && (
              <StyledMenuItem onClick={handleClose}>
                {" "}
                Department :{" "}
                {item?.department
                  .map((el) => el[0].toUpperCase() + el.substring(1))
                  .join(" ")}
              </StyledMenuItem>
            )}
            <StyledMenuItem remove onClick={removeItem}>
              Remove{" "}
            </StyledMenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
};

export default CourseItem;
