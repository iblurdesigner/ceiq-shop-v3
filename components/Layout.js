import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import classes from "../utils/classes";
import { useContext } from "react";
import { Store } from "../utils/Store";
import jsCookie from "js-cookie";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#FDCA58",
      },
      secondary: {
        main: "#26DDBE",
      },
      ter: {
        main: "#03C2F3",
      },
      cuar: {
        main: "#282560",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    jsCookie.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} - CEIQ Shop` : "CEIQ Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <NextLink href="/" passHref>
                <Link>
                  <Typography sx={classes.brand}>CEIQ Shop</Typography>
                </Link>
              </NextLink>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>

              {/* Link de iniciar sesion */}
              <NextLink href="/login" passHref>
                <Link>Iniciar</Link>
              </NextLink>

              {/* link carrito con el badge */}
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        Carrito
                      </Badge>
                    ) : (
                      "Cart"
                    )}
                  </Typography>
                </Link>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>Todos los derechos reservador. CEIQ Shop.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
