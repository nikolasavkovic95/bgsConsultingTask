import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Form } from './form';
import PersonIcon from '@mui/icons-material/Person';

export const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 305,
  minWidth: 285,
  backgroundColor: theme.palette.background.content.background,
  boxShadow: `0px 8px 8px ${theme.palette.shadow.login.color}`,
  color: theme.palette.white.main,
  padding: '30px 20px 45px',
  borderRadius: theme.palette.shape.borderRadiusDefault,
}));

export const BorderGradient = styled('div')(({ theme }) => ({
  borderRadius: 10,
  margin: '30px 30px 30px',
  border: '1px solid transparent',
  background: theme.palette.border.content.background,
}));

export const ContentHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 40,
});

export const SplitWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '50%',
  marginTop: '24px',
});

export const Wrapper = styled('div')({});

const Content = () => {
  return (
    <Grid sx={{ mt: 5 }} container alignItems="center" justifyContent="center">
      <Wrapper>
        <BorderGradient>
          <ContentWrapper>
            <ContentHeader>
              <PersonIcon fontSize="large" />
              <Typography sx={{ mt: 1.1, ml: 1.3 }} variant="h3" align="left">
                User Registration
              </Typography>
            </ContentHeader>
            <Typography sx={{ mb: 0.5 }} variant="body2" align="left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s..
            </Typography>
            <Form />
          </ContentWrapper>
        </BorderGradient>
      </Wrapper>
    </Grid>
  );
};

export default Content;
