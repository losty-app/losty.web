import { CircularProgress, Modal, Typography } from "@mui/material";
import "./styles.css";

const LoadingModal = ({ open, text }) => {
  return (
    <Modal open={open} className="modal">
      <div className="paper">
        <div style={{ paddingBottom: "10%" }}>
          <CircularProgress />
        </div>
        <Typography variant="body1">{text}</Typography>
      </div>
    </Modal>
  );
};

export default LoadingModal;
