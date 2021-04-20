import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginFormPage from "../LoginFormPage/indexOld"
import {closeLogin} from "../../store/modal"


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
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.modalReducer.login)



  const handleClose = () => {
    dispatch(closeLogin());
  }

  return (
    <div>
      <Modal
        open={loginState}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropProps={{ invisible: true }}
        >
          <LoginFormPage className={classes.paper}/>
      </Modal>
    </div>
  )
}
