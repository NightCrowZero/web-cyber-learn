import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
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

const UserProfilePage = () => {

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


      {/* Content */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3, color: "#1a237e" }}>
          Личный кабинет
        </Typography>

        {/* Information about user */}
        <Grid container spacing={3} justifyContent="center">
          {/* Avtar and data */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", padding: 3 }}>
              <Avatar src={userData.avatar} alt={userData.name} sx={{ width: 150, height: 150, margin: "0 auto" }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>{userData.name}</Typography>
              <Typography variant="body2" color="textSecondary">{userData.email}</Typography>
              <Typography variant="body2" color="textSecondary">{userData.phone}</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ваши курсы
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    margin: "10px",
                    background: "linear-gradient(90deg, #1a237e, #0d47a1)",
                    color: "#fff",
                    marginTop: 2,
                    ":hover": { background: "#0d47a1" },
                  }}
                  onClick={() => navigate("/user-courses")}
                >
                  Перейти в мои курсы
                </Button>
                
                <Button variant="contained"
                  sx={{
                    margin: "10px",
                    background: "linear-gradient(90deg, #1a237e, #0d47a1)",
                    color: "#fff",
                    marginTop: 2,
                    ":hover": { background: "#0d47a1" },
                  }}
                  onClick={() => navigate("/profile-redact")}
                >
                  Редактирование профиля
                </Button>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Box>
  );
};

export default UserProfilePage;