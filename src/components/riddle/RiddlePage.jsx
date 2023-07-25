import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

import api from "../../config/api";

import Riddle from "./Riddle";
import ErrorSnackbar from "../general/ErrorSnackbar";

const RiddlePage = () => {
  const [riddleData, setRiddleData] = useState({});
  const [riddleDataIsLoading, setRiddleDataIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    generateRiddle();
  }, []);

  const closeSnackbar = () => setOpenSnackbar(false);

  const generateRiddle = async () => {
    setRiddleDataIsLoading(true);
    setOpenSnackbar(false);

    try {
      const response = await api.get("https://api.api-ninjas.com/v1/riddles");

      setRiddleData(response.data[0]);
    } catch (error) {
      setOpenSnackbar(true);
      setRiddleData({});
    } finally {
      setRiddleDataIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {riddleDataIsLoading ? (
        <Box
          width="100%"
          minHeight="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : !riddleData?.question ? (
        <Typography variant="h6" component="p">
          No Riddle Data
        </Typography>
      ) : (
        <Riddle riddleData={riddleData} onRetry={generateRiddle} />
      )}
      <ErrorSnackbar
        openSnackbar={openSnackbar}
        closeSnackbar={closeSnackbar}
      />
    </Box>
  );
};

export default RiddlePage;
