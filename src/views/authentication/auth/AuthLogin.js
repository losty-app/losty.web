import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './styles.css';

import {
  encryptConfirmationCode,
  getGeneratedCode,
  sendConfirmationCode,
} from 'src/helpers/authHelper';
import { toast } from 'react-toastify';
import PhoneInputWithCountrySelect from 'react-phone-number-input';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendConfirmationCode = async () => {
    try {
      if (!isValidPhoneNumber(phoneNumber)) {
        toast.error('מספר טלפון לא תקין');
        return;
      }
      const generatedCode = (await getGeneratedCode()).toString();
      await sendConfirmationCode(phoneNumber, generatedCode);
      const preEncryption = phoneNumber + generatedCode;
      const confirmationCodeEncryption = await encryptConfirmationCode(preEncryption.toString());
      navigate('/verify', {
        state: {
          confirmationCodeEncryption,
          phoneNumber,
        },
      });
    } catch (error) {
      toast.error('שליחת קוד אימות נכשלה');
    }
  };

  const inputStyle = {
    borderRadius: '8px',
    border: '1px solid #ccc',
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    fontFamily: 'Varela Round',
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box
          sx={{
            direction: (theme) => theme.direction,
          }}
        >
          <Typography variant="h4" fontWeight={600} component="label" htmlFor="tel">
            טלפון
          </Typography>
          <PhoneInputWithCountrySelect
            numberInputProps={{ className: 'custom-phone-input' }}
            id="tel"
            placeholder="הכנס מספר טלפון"
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="IL"
            style={inputStyle} // Apply the inputStyle
          />
        </Box>
      </Stack>
      <Box
        sx={{
          p: '20px',
        }}
      >
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          onClick={handleSendConfirmationCode}
        >
          שלח קוד אימות
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;
