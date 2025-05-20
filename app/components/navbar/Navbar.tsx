"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "./navbar.module.scss";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* Usuń komponent AppBar i zastąp go własnym div */}
      <div className={styles.navContainer}>
        <div className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>

          <div className={styles.logo}>
            <Image
              src="/img/fdfLogo.png"
              alt="FDF Logo"
              width={120}
              height={40}
              priority
              className={styles.logoImage}
            />
          </div>

          <div className={styles.nav}>
            {navItems.map((item) => (
              <Button key={item} className={styles.navButton}>
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
