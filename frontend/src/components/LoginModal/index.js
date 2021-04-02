import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginFormPage from "../LoginFormPage/indexOld"


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.primary.main,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,4),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
          <LoginFormPage className={classes.paper}/>
      </Modal>
    </div>
  )
}
