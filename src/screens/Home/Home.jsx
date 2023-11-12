import { useState } from "react";
import { Header, HeaderText, Heading, Buttons, Button } from "./Home.styles";
import ModalPortal from "../../Components/Modal/Modal";
import ModalTableList from "../../Components/Modal/ModalTableList";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleClick = (e) => {
    e.target.blur();
    handleOpen();
  };

  return (
    <>
      <Header>
        <Heading>
          <HeaderText>Time Table Generator</HeaderText>
        </Heading>
        <Buttons>
          <Button to="/create" color="#FF91AF">
            Start Generator
          </Button>
          <Button onClick={handleClick} color="#E5E4E2">
            Load Saved Tables
          </Button>
          <ModalPortal open={open} handleClose={handleClose}>
            <ModalTableList />
          </ModalPortal>
        </Buttons>
      </Header>
    </>
  );
};

export default Home;
