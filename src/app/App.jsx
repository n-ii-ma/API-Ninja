import { CssBaseline, Box, Container, Card, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "../components/general/Header";
import WeatherPage from "../components/weather/WeatherPage";
import TimePage from "../components/time/TimePage";
import RiddlePage from "../components/riddle/RiddlePage";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Box sx={{ marginTop: "1em" }}>
        <Header />
        <Container component="main" maxWidth="xs">
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
              backgroundColor: "#f7f7f7",
            }}
            raised
          >
            <Routes>
              <Route path="/" element={<WeatherPage />} />
              <Route path="/time" element={<TimePage />} />
              <Route path="/riddle" element={<RiddlePage />} />
            </Routes>
          </Card>
        </Container>
        <Container component="footer">
          <Typography
            textAlign="center"
            variant="subtitle2"
            component="p"
            marginTop="1em"
          >
            &copy; {new Date().getFullYear()} API Ninja
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
