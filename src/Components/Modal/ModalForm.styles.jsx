import { styled as styledC } from "styled-components";
import { styled } from "@mui/system";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { Tabs as BaseTabs } from "@mui/base/Tabs";
import { Link } from "react-router-dom";

const Tabs = styled(BaseTabs)`
  width: 80%;
`;

const Button = styledC.button`
  display:block;
  padding:1rem 2rem;
  color:white;
  background-color:#ef9b0f;
  border-radius:5px;
  box-shadow:1px 1px 0px rgba(0,0,0,0.5);
  cursor:pointer;
  transition: all .3s ease-in;

  &:hover{
    transform: translateY(-1px);
    box-shadow:5px 5px 10px rgba(0,0,0,0.5);
  }

  &:focus{
    box-shadow:1px 1px 10px rgba(0,0,0,0.5);
  }
`;

const SubmitButton = styledC(Link)`
  display:block;
  padding:1rem 2rem;
  color:white;
  background-color:#ef9b0f;
  border-radius:5px;
  box-shadow:1px 1px 0px rgba(0,0,0,0.5);
  cursor:pointer;
  transition: all .3s ease-in;

  &:hover{
    transform: translateY(-1px);
    box-shadow:5px 5px 10px rgba(0,0,0,0.5);
    text-decoration:none;
    color:white;
  }

  &:focus{
    box-shadow:1px 1px 10px rgba(0,0,0,0.5);
  }
`;

const Tab = styled(BaseTab)`
  color: grey;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #ffdb58;
  }

  &:focus {
    color: #fff;
    outline: 3px solid white;
  }

  &.${tabClasses.selected} {
    background-color: #ef9b0f;
    color: white;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-size: 1.5rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    min-width: 400px;
    background-color: white;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
    `
);

const ErrorMessage = styledC.span`
  font-size:1.6rem;
  color:red;
  margin:1rem;
  display:block;
  font-weight:300;
`;

const Span = styledC.span`
    width:100%;
    height:100%;
    padding:8px 12px;
`;

export {
  Tab,
  Tabs,
  TabPanel,
  TabsList,
  SubmitButton,
  ErrorMessage,
  Span,
  Button,
};
