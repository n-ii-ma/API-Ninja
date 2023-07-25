import { Typography, CircularProgress } from "@mui/material";
import CardBox from "../general/CardBox";

const WeatherCard = ({ weatherData, weatherDataIsLoading }) => (
  <CardBox>
    {weatherDataIsLoading ? (
      <CircularProgress />
    ) : !weatherData?.temp ? (
      <Typography variant="h6" component="p">
        No Weather Data
      </Typography>
    ) : (
      <>
        <Typography
          variant="body1"
          component="p"
          mb={5}
          sx={{ alignSelf: "flex-start" }}
        >
          Min Temp: {Math.round(weatherData?.min_temp)}°C
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          mb={5}
          sx={{ alignSelf: "center" }}
        >
          {Math.round(weatherData?.temp)}°C
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ alignSelf: "flex-end" }}
        >
          Max Temp: {Math.round(weatherData?.max_temp)}°C
        </Typography>
      </>
    )}
  </CardBox>
);

export default WeatherCard;
