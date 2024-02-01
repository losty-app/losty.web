import React from 'react';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';

const TypographyPage = () => {
  return (
    <PageContainer
      title="Typography"
      description="this is Typography"
      sx={{
        direction: (theme) => theme.direction,
      }}
    >
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <DashboardCard title="Default Text">
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h1"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h1. Heading
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 30 | line-height: 45 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h2"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h2. Heading
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 24 | line-height: 36 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h3"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h3. Heading
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 21 | line-height: 31.5 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h4. Heading
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 18 | line-height: 27 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h5. Heading
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 16 | line-height: 24 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      h6. Heading
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 14 | line-height: 21 | font weight: 500
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 16 | line-height: 28 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 14 | line-height: 21 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 16 | line-height: 24 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 14 | line-height: 20 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="caption"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 12 | line-height: 19 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="overline"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      overline. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      font size: 12 | line-height: 31 | font weight: 400
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
            </Grid>
          </DashboardCard>
        </Grid>
        <Grid item sm={12}>
          <DashboardCard title="Default Text">
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="textprimary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      Text Primary
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textprimary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                      tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      Text Secondary
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        direction: (theme) => theme.direction,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                      tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
            </Grid>
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TypographyPage;
