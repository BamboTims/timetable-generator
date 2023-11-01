import { createPortal } from "react-dom";
import Fade from "@mui/material/Fade";
import { StyledBackdrop, ModalContainer, Modal } from "./Modal.styles";

const ModalPortal = ({ open, handleClose, children }) => {
  return createPortal(
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContainer>{children}</ModalContainer>
        </Fade>
      </Modal>
    </div>,
    document.body
  );
};

export default ModalPortal;
