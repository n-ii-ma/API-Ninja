import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function NavTabs() {
  const { pathname } = useLocation();
  const [tabName, setTabName] = useState(pathname);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tabName}
        onChange={(event, value) => setTabName(value)}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab LinkComponent={NavLink} to="/" value="/" label="Weather" />
        <Tab LinkComponent={NavLink} to="/time" value="/time" label="Time" />
        <Tab
          LinkComponent={NavLink}
          to="/riddle"
          value="/riddle"
          label="Riddle"
        />
      </Tabs>
    </Box>
  );
}
