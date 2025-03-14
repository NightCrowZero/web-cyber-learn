import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const userCourses = [
  {
    id: 1,
    title: "Основы кибербезопасности",
    description: "Начальный курс по защите данных.",
    image: "https://utimaco.com/sites/default/files/styles/ut_stage_l_jpeg/public/2022-09/The_importance_of_cybersecurity.jpg.webp?itok=BW6MznUE",
    progress: 75, 
  },
  {
    id: 2,
    title: "Пентестинг для начинающих",
    description: "Практические навыки тестирования.",
    image: "https://cdn.plainconcepts.com/wp-content/uploads/2022/10/pentesting.jpg",
    progress: 40, 
  },
  {
    id: 3,
    title: "Социальная инженерия",
    description: "Учитесь избегать атак через человеческий фактор.",
    image: "https://www.asdwa.org/wp-content/uploads/2023/03/whitehousecyber_thumb-1-300x200.webp",
    progress: 90, 
  },
];

const UserCoursesPage = () => {

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

      {/* List of user courses */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3, color: "#1a237e" }}>
          Ваши курсы
        </Typography>
        <Grid container spacing={3}>
          {userCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                  }}
                />
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                    {course.description}
                  </Typography>
                  <Box>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                      Прогресс:
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.progress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#e0e0e0",
                        "& .MuiLinearProgress-bar": {
                          background: "linear-gradient(90deg, #1a237e, #0d47a1)",
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ marginTop: 1, textAlign: "right", color: "#1a237e" }}
                    >
                      {course.progress}%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserCoursesPage;