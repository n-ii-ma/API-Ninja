import { Snackbar, Alert } from "@mui/material";

const ErrorSnackbar = ({ openSnackbar, closeSnackbar }) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Alert severity="error" sx={{ width: "100%" }} onClose={closeSnackbar}>
        Error!
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
