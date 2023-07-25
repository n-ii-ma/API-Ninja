import { Typography, Container } from "@mui/material";
import NavTabs from "./NavTabs";

const Header = () => (
  <Container component="header" maxWidth="xs">
    <Typography variant="h3" component="h1" mb={2} textAlign="center">
      API Ninja
    </Typography>
    <NavTabs />
  </Container>
);

export default Header;
