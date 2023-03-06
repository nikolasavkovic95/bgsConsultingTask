import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

const AlertStyled = styled(MuiAlert)(({ theme }) => ({
  '&.MuiAlert-filled': {
    color: theme.palette.alerts.error.color,
    backgroundColor: theme.palette.alerts.error.background,
    borderRadius: 8,
    fontWeight: 400,
    '& .MuiAlert-icon': {
      color: theme.palette.alerts.error.color,
    },
  },
}));

const Alert = (props) => {
  const { children, ...rest } = props;
  return <AlertStyled {...rest}>{children}</AlertStyled>;
};

export default Alert;
