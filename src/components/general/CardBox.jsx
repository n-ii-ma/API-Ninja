import { Box, Card } from "@mui/material";

const CardBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: "75%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <Card
        sx={{
          width: "80%",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1em",
          backgroundColor: "#fff",
        }}
        raised
      >
        {children}
      </Card>
    </Box>
  );
};

export default CardBox;
