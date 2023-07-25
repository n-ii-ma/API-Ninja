import { useState } from "react";

import api from "../../config/api";

import SearchInput from "../general/SearchInput";
import WeatherCard from "./WeatherCard";
import ErrorSnackbar from "../general/ErrorSnackbar";

const WeatherPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [weatherDataIsLoading, setWeatherDataIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const closeSnackbar = () => setOpenSnackbar(false);

  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getWeather = async (cityName) => {
    setWeatherDataIsLoading(true);
    setOpenSnackbar(false);

    try {
      const response = await api.get(`weather?city=${cityName}`);

      setWeatherData(response.data);
    } catch (error) {
      setOpenSnackbar(true);
      setWeatherData({});
    } finally {
      setWeatherDataIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    getWeather(searchInput);
  };

  return (
    <>
      <SearchInput
        searchInput={searchInput}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <WeatherCard
        weatherData={weatherData}
        weatherDataIsLoading={weatherDataIsLoading}
      />
      <ErrorSnackbar
        openSnackbar={openSnackbar}
        closeSnackbar={closeSnackbar}
      />
    </>
  );
};

export default WeatherPage;
