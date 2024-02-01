import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const LogoutConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>האם אתה בטוח שברצונך להתנתק?</DialogTitle>
      <DialogContent>
        <DialogContentText>התנתקות תוציא אותך מהמערכת</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          בטל
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color="error"
        >
          התנתק
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutConfirmationModal;
