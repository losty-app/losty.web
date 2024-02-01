import { Modal, Typography } from '@mui/material';
import './styles.css';
import Lottie from 'lottie-react'; // Import the Lottie component
import loadingLottie from '../../assets/lottie/loading-lottie.json'; // Import your Lottie animation JSON file

const LoadingModal = ({ open, text }) => {
  return (
    <Modal open={open} className="modal">
      <div className="paper">
        {/* Use the Lottie component to render the animation */}
        <Lottie
          animationData={loadingLottie} // Pass your animation JSON data here
          loop={true}
          style={{ width: '150px', height: '150px' }} // Set the width and height of the animation
        />
        <Typography variant="body1">{text}</Typography>
      </div>
    </Modal>
  );
};

export default LoadingModal;
