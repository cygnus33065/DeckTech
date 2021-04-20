import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import SignupForm from './SignupForm'
import {closeSignup} from '../../store/modal'

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


export default function SignupFormModal () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.modalReducer.signupShow)
  // console.log(signupState)
  const handleClose = () => {
    dispatch(closeSignup());
  };

  return (
    <div>
      <Modal
        BackdropProps={{ invisible: true }}
        open={signupState}
        onClose={handleClose}
        aria-labelledby="signup-form-modal-title"
        aria-describedby="signup-form-modal-description"
        >
          <SignupForm className={classes.paper}/>
      </Modal>
    </div>
  )
}
