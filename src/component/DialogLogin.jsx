import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHandleChange from "./hook/useHandleChange";
import { doLogin, updateStateLogin } from "../redux/feature/authentSlice";

function DialogLogin() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authentSlice.isLogin);
  const isOpen = useSelector((state) => state.authentSlice.isOpenDialogLogin);
  const { formLogin, handleChange, setFormLogin } = useHandleChange({
    username: "mluan99",
    password: "291099",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(updateStateLogin(false));
  };

  const handleLogin = () => {
    console.log(formLogin);
    dispatch(doLogin(formLogin));
  };

  useEffect(() => {
    if (isLogin) {
      setFormLogin({
        username: "",
        password: "",
      });
    }
  }, [isLogin, setFormLogin]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">Login</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please log in to add products and see your cart.
        </DialogContentText>
        <Typography component="div" style={{ margin: "5px" }}>
          <TextField
            id="standard-username"
            label="Username (mluan99)"
            variant="standard"
            name="username"
            onChange={handleChange}
            value={formLogin.username}
          />
        </Typography>
        <Typography component="div" style={{ margin: "5px" }}>
          <TextField
            type="password"
            id="standard-password"
            label="Password (291099)"
            variant="standard"
            name="password"
            onChange={handleChange}
            value={formLogin.password}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          style={{ marginRight: "15px" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogLogin;
