import { Typography, CircularProgress } from "@mui/material";
import CardBox from "../general/CardBox";

const TimeCard = ({ timeData, timeDataIsLoading }) => (
  <CardBox>
    {timeDataIsLoading ? (
      <CircularProgress />
    ) : !timeData?.datetime ? (
      <Typography variant="h6" component="p">
        No Time Data
      </Typography>
    ) : (
      <>
        <Typography
          variant="body1"
          component="p"
          mb={5}
          sx={{ alignSelf: "flex-start" }}
        >
          {timeData?.day_of_week}
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          textAlign="center"
          fontWeight={500}
          mb={5}
          sx={{ alignSelf: "center" }}
        >
          {timeData?.datetime}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ alignSelf: "flex-end" }}
        >
          {timeData?.timezone}
        </Typography>
      </>
    )}
  </CardBox>
);

export default TimeCard;
