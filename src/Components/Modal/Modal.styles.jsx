import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled from "styled-components";
import { Fade } from "@mui/material";
import { Modal as BaseModal } from "@mui/base/Modal";

// eslint-disable-next-line react/display-name
const Backdrop = forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  border-radius: 15px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 2px 24px #383838;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ModalContainer, StyledBackdrop, Modal };
