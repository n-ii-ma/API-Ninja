import { useState } from "react";
import { Box, Card, Typography, Button, ButtonGroup } from "@mui/material";

const Riddle = ({ riddleData, onRetry }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <Box mb={2}>
        <Typography variant="h6" component="h5" textAlign="center">
          Question:
          <Typography variant="body1" component="p" textAlign="center">
            {riddleData?.question}
          </Typography>
        </Typography>
      </Box>
      <Box mb={3}>
        <ButtonGroup variant="contained">
          <Button
            onClick={() => setShowAnswer((prevState) => !prevState)}
            color={showAnswer ? "warning" : "primary"}
          >
            {showAnswer ? "Hide Answer" : "Reveal Answer"}
          </Button>
          <Button onClick={onRetry} color="secondary">
            Retry
          </Button>
        </ButtonGroup>
      </Box>
      <Card
        raised
        sx={{
          width: "90%",
          display: showAnswer ? "block" : "none",
          padding: "1em",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" component="h6" textAlign="center">
          {riddleData?.answer}
        </Typography>
      </Card>
    </>
  );
};

export default Riddle;
