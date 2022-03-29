import React from "react";
import Layout from "../components/Layout";
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";
import Form from "../components/Form";
import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {};
  return (
    <Layout title="Login">
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Email no válido"
                        : "Email es requerido"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === "minLength"
                        ? "La contraseña debe ser mayor a 5 caracteres"
                        : "La contraseña es requerida"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Iniciar
            </Button>
          </ListItem>
          <ListItem>
            No tienes una cuenta?{" "}
            <NextLink href={"/register"} passHref>
              <Link>Registrar</Link>
            </NextLink>
          </ListItem>
        </List>
      </Form>
    </Layout>
  );
}
