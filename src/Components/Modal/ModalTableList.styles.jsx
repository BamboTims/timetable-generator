import { Link } from "react-router-dom";
import styled from "styled-components";

const ListHeading = styled.h3`
  display: block;
  font-family: "Pixelify";
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0 2rem;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const TableLists = styled.ul`
  width: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 300px;
  padding: 0 2rem;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
`;

const TableListItem = styled.li`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const TableListLink = styled(Link)`
  color: black;
  font-family: "Tomorrow";
  font-size: 1.5rem;
  background-color: #ffdb58;
  display: block;
  padding: 1rem 0;
  text-align: center;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const NoTableText = styled.p`
  font-size: 1.8rem;
  font-family: "Tomorrow";
  letter-spacing: 2px;
`;

export { ListHeading, TableLists, TableListItem, TableListLink, NoTableText };
