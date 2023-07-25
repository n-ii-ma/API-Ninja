import { Box, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchInput = ({ searchInput, onTextChange, onSubmit }) => (
  <Box
    onSubmit={onSubmit}
    component="form"
    sx={{
      width: "75%",
      position: "relative",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <TextField
      label="City Name"
      variant="outlined"
      type="search"
      required
      fullWidth
      id="city"
      name="city"
      value={searchInput}
      onChange={onTextChange}
      sx={{ backgroundColor: "#fff" }}
    />
    <IconButton type="submit" sx={{ marginLeft: "0.1em" }} color="primary">
      <Search />
    </IconButton>
  </Box>
);

export default SearchInput;
