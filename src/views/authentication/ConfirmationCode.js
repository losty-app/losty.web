import React, { useEffect } from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/loggedIn/shared/logo/Logo';
import AuthConfirmationCode from './auth/AuthConfirmationCode';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const ConfirmationCode = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use destructuring to extract the props from location.state with default values
  const { phoneNumber = '', confirmationCodeEncryption = '' } = location.state || {};

  useEffect(() => {
    // Check if location.state is defined and navigate to /login if not
    if (!location.state) {
      navigate('/login');
    }
  }, [location.state, navigate]);

  return (
    <PageContainer title="אימות משתמש" description="זה מסך אימות המשתמש">
      <Box>
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={10}
            sm={8}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthConfirmationCode
                confirmationCodeEncryption={confirmationCodeEncryption}
                phoneNumber={phoneNumber}
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    אנא הכנס/י את קוד האימות שנשלח אלייך
                  </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default ConfirmationCode;
