import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  encryptConfirmationCode,
  getGeneratedCode,
  sendConfirmationCode,
  signUser,
} from 'src/helpers/authHelper';
import { IconRotate360 } from '@tabler/icons';
import OTPInput from 'react-otp-input'; // Import the OTP input library
import LoadingModal from 'src/components/loading/LoadingModal';

const AuthConfirmationCode = ({
  confirmationCodeEncryption,
  phoneNumber,
  title,
  subtitle,
  subtext,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSendAgain = async () => {
    try {
      setLoading(true);
      const generatedCode = (await getGeneratedCode()).toString();
      await sendConfirmationCode(phoneNumber, generatedCode);
      const preEncryption = phoneNumber + generatedCode;
      const newConfirmationCodeEncryption = await encryptConfirmationCode(preEncryption.toString());
      setLoading(false);
      setOtp('');
      confirmationCodeEncryption(newConfirmationCodeEncryption);
    } catch (error) {
      toast.error('שליחת קוד אימות נכשלה');
    }
  };

  const handleConfirmation = async () => {
    try {
      setLoading(true);
      const adjustedOTP = otp.trim();
      const preEncryption = phoneNumber + adjustedOTP;
      const encryptedString = await encryptConfirmationCode(preEncryption.toString());

      if (confirmationCodeEncryption !== encryptedString) {
        toast.error('קוד האימות אינו תואם');
        setLoading(false);
        return;
      }

      await signUser(phoneNumber, dispatch);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      toast.error('ההתחברות נכשלה');
    }
  };

  return (
    <>
      <Typography
        fontWeight="700"
        variant="h2"
        mb={1}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        {title}
      </Typography>

      {subtext}

      <Stack direction="row" justifyContent="center">
        <div style={{ direction: 'ltr', display: 'flex', alignItems: 'center' }}>
          {/* Center the OTP input */}
          <Box mx={1}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              onPaste={handleConfirmation}
              numInputs={5}
              shouldAutoFocus
              renderInput={(props) => (
                <input
                  {...props}
                  type="tel"
                  style={{
                    width: '42px',
                    height: '42px',
                    fontSize: '16px',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                    margin: '5px',
                    borderRadius: '10px' /* Add CSS to hide number input arrows */,
                  }}
                /> // Attach the ref to the input
              )}
              inputType="number"
              containerStyle={{ textAlign: 'center' }}
            />
          </Box>
        </div>
      </Stack>

      <Box sx={{ p: '20px' }}>
        <Button
          color="secondary"
          variant="text"
          size="small"
          fullWidth
          onClick={handleSendAgain}
          disabled={loading}
          endIcon={
            <IconRotate360
              style={{
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          }
        >
          שלח שוב
        </Button>
      </Box>

      <Box sx={{ p: '20px' }}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={handleConfirmation}
          disabled={loading}
        >
          אמת
        </Button>
      </Box>

      {subtitle}
      <LoadingModal open={loading} text={'כמה שניות... אנו מאמתים אותך...'} />
    </>
  );
};

export default AuthConfirmationCode;
