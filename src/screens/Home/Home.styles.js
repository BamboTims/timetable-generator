import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Heading = styled.div`
  width: 50%;
  padding: 2rem;

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;

const HeaderText = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  font-family: "Vast Shadow", serif;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
  width: 30%;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

const Button = styled(Link)`
  border: 2px solid #555d50;
  background-color: ${(props) => props.color};
  color: black;
  font-size: 2rem;
  padding: 2rem 4rem;
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  box-shadow: 2px 4px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease-in all;

  &:hover {
    box-shadow: 2px 10px rgba(0, 0, 0, 0.4);
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: #000;
    text-decoration: none;
  }
`;

Button.defaultProps = {
  color: "white",
};

export { Header, HeaderText, Heading, Buttons, Button };
