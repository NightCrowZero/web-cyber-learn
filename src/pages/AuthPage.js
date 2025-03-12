import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false); 
  const { register, handleSubmit, watch } = useForm(); 
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const password = watch("password");

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(90deg, #1a237e, #0d47a1)",
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#1a237e", marginBottom: 2 }}
        >
          {isRegister ? "Регистрация" : "Вход"}
        </Typography>

        {!isRegister && (
          <>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", color: "gray", marginBottom: 2 }}
            >
              Войдите с помощью:
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 2 }}>
              <Grid item>
                <IconButton
                  sx={{ background: "#DB4437", color: "#fff", ":hover": { background: "#a43526" } }}
                >
                  <GoogleIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ background: "#0078D4", color: "#fff", ":hover": { background: "#005A9E" } }}
                >
                  <MicrosoftIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ background: "#4267B2", color: "#fff", ":hover": { background: "#29487d" } }}
                >
                  <FacebookIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ background: "#1DA1F2", color: "#fff", ":hover": { background: "#0d8cd6" } }}
                >
                  <TwitterIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 2 }}>Или</Divider>
          </>
        )}

        {/* Форма входа или регистрации */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Электронная почта или номер телефона"
            {...register("emailOrPhone", { required: "Это поле обязательно" })}
          />

          {!isRegister && (
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Пароль"
              type="password"
              {...register("password", { required: "Это поле обязательно" })}
            />
          )}

          {isRegister && (
            <>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Пароль"
                type="password"
                {...register("password", { required: "Введите пароль" })}
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Повторите пароль"
                type="password"
                {...register("confirmPassword", {
                  required: "Подтвердите пароль",
                  validate: (value) =>
                    value === password || "Пароли не совпадают",
                })}
              />
            </>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #1a237e, #0d47a1)",
              color: "#fff",
              marginTop: 2,
              ":hover": { background: "#0d47a1" },
            }}
          >
            {isRegister ? "Зарегистрироваться" : "Войти"}
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginTop: 2,
            color: "gray",
            cursor: "pointer",
            ":hover": { color: "#1a237e" },
          }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Уже есть аккаунт? Войдите" : "Нет аккаунта? Зарегистрируйтесь"}
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            marginTop: 3,
            color: "#1a237e",
            borderColor: "#1a237e",
            ":hover": { background: "#f5f5f5" },
          }}
          onClick={() => navigate("/")}
        >
          Вернуться на главную
        </Button>
      </Box>
    </Box>
  );
};

export default AuthPage;
