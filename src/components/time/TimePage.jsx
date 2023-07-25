import { useState } from "react";

import api from "../../config/api";

import SearchInput from "../general/SearchInput";
import TimeCard from "./TimeCard";
import ErrorSnackbar from "../general/ErrorSnackbar";

const TimePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [timeData, setTimeData] = useState({});
  const [timeDataIsLoading, setTimeDataIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const closeSnackbar = () => setOpenSnackbar(false);

  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getTime = async (cityName) => {
    setTimeDataIsLoading(true);
    setOpenSnackbar(false);

    try {
      const response = await api.get(`worldtime?city=${cityName}`);

      setTimeData(response.data);
    } catch (error) {
      setOpenSnackbar(true);
      setTimeData({});
    } finally {
      setTimeDataIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    getTime(searchInput);
  };

  return (
    <>
      <SearchInput
        searchInput={searchInput}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TimeCard timeData={timeData} timeDataIsLoading={timeDataIsLoading} />
      <ErrorSnackbar
        openSnackbar={openSnackbar}
        closeSnackbar={closeSnackbar}
      />
    </>
  );
};

export default TimePage;
