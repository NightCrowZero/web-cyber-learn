import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const userData = {
  name: "Иван Иванов",
  email: "ivan.ivanov@example.com",
  phone: "+380979361235",
  avatar: "https://stuki-druki.com/biofoto4/ivan-evgenjevich-ivanov-01.webp", 
};


const UserRedactProfilePage = () => {

    const navigate = useNavigate(); 
    const { t } = useTranslation();
   
   return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "94vh", 
    }}
    >
        {/* Up panel */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #001f3f, #007bff)",
          boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "Share Tech Mono, monospace",
              color: "#00e5ff",
              letterSpacing: "2px",
            }}
          >
            {t("header.title")}
          </Typography>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }}
          onClick={() => navigate("/")}
          >
          {t("header.home")}
          </Button>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }}>
          {t("header.service")}
          </Button>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }}>
          {t("header.contacts")}
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              border: "1px solid #00e5ff",
              borderRadius: "20px",
              padding: "5px 15px",
              ":hover": { background: "rgba(0, 229, 255, 0.1)" },
            }}
            onClick={() => navigate("/auth")} 
          >
            {t("header.login")}
          </Button>
        </Toolbar>
      </AppBar>

    <Grid item xs={12} sm={8}>
            <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                Редактировать данные
                </Typography>
                <form>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Имя"
                    defaultValue={userData.name}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Электронная почта"
                    defaultValue={userData.email}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Телефон"
                    defaultValue={userData.phone}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    sx={{
                    background: "linear-gradient(90deg, #1a237e, #0d47a1)",
                    color: "#fff",
                    marginTop: 2,
                    ":hover": { background: "#0d47a1" },
                    }}
                >
                    Сохранить изменения
                </Button>
                </form>
            </CardContent>
            </Card>
            </Grid>
    </Box>
 );
};
export default UserRedactProfilePage;
