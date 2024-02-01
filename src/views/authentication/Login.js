import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/loggedIn/shared/logo/Logo';
import AuthLogin from './auth/AuthLogin';

const Login = () => {
  const gridContainerStyles = {
    transform: 'scale(0.98)',
    transition: 'transform 0.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)', // Scale up by 5% on hover (adjust as needed)
    },
  };

  return (
    <PageContainer title="התחברות" description="זה מסך ההתחברות">
      <Box>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{
            height: '100vh',
          }}
        >
          <Grid
            item
            xs={11}
            sm={8}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={[gridContainerStyles, { p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }]}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    אנא הכנס/י מספר טלפון על מנת להיכנס למערכת
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

export default Login;
