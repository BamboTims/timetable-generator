import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 40%;
  height: 100%;
  border-right: 2px solid black;
  padding: 1rem;
  overflow-y: scroll;
`;

const Form = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export { Flex, Side, Form };
