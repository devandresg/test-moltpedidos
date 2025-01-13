import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../features/apiauth/apiAuthSlice";
import { useDispatch } from "react-redux";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const data = {
    //  username: username,
    //  password: password,
    //};
    //const res: any = await dispatch(login(data));
    //if (res) {
    //  navigate("/requests");
    //}
    console.log(username);
    console.log(password);
    if (username == "Admin" && password == "123456789") {
      await dispatch(setToken("test-app-kjkldaisfnfueiq0dknc"));
      navigate("/requests");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          {/* Logo o Identidad Visual */}
          <Typography variant="h5" component="h1" gutterBottom>
            Iniciar Sesión
          </Typography>

          {/* Formulario */}
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box>
              {/* Campo de correo electrónico */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Campo de contraseña */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            {/* Botón de inicio de sesión */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                borderRadius: "15px",
                width: "150px",
                backgroundColor: "#5945DC",
                height: "40px",
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
