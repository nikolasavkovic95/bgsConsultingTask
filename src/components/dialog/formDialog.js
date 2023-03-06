import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '../icons/checkIcon';

const DialogBox = styled(Dialog)(({ theme }) => ({
  backgroundColor: theme.palette.dialog.background,
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.dialog.paper.background,
    borderRadius: 8,
    maxWidth: 350,
    minWidth: 330,
  },
  '& .MuiDialogContent-root': {
    padding: 20,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DialogHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: 20,
});

export default function FormDialog({ status }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate('/casino');
  };

  useEffect(() => {
    if (status.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [status]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DialogBox onClose={handleClick} aria-labelledby="customized-dialog-title" open={open}>
        <DialogHeader>
          <Typography sx={{ mt: 0.6 }} variant="h3" align="left">
            Success!
          </Typography>
        </DialogHeader>
        <DialogContent>
          <Typography variant="body1">{status}</Typography>
          <Button sx={{ mt: 2, mb: 1 }} variant="outlined" autoFocus onClick={handleClick}>
            OK
          </Button>
        </DialogContent>
      </DialogBox>
    </div>
  );
}
