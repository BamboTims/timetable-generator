import { useState } from "react";
import { Header, HeaderText, Heading, Buttons, Button } from "./Home.styles";
import ModalPortal from "../../Components/Modal/Modal";
import ModalForm from "../../Components/Modal/ModalForm";

const Home = () => {
  const handleClick = (e) => {
    e.target.blur();
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
          <Button color="#E5E4E2">Load Saved Tables</Button>
          {/* <ModalPortal open={open} handleClose={handleClose}>
            <ModalForm />
          </ModalPortal> */}
        </Buttons>
      </Header>
    </>
  );
};

export default Home;
