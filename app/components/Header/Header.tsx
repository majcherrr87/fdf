import { Box } from "@mui/material";
import Nav from "../Nav/Nav";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Box className={styles.header} sx={{ pt: "64px" }}>
      <Nav />
      Header
    </Box>
  );
};
