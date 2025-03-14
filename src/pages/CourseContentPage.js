import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Пример данных 
const courseData = {
  title: "Основы кибербезопасности",
  videoUrl: "https://denis-creative.com/wp-content/uploads/2020/04/video.mp4", // Ссылка на видео    https://www.w3schools.com/html/mov_bbb.mp4  https://denis-creative.com/wp-content/uploads/2020/04/video.mp4
  description: "Этот курс расскажет вам о базовых принципах защиты данных.",
  practicalMaterials: [
    { id: 1, name: "Практическое задание 1", fileUrl: "#" },
    { id: 2, name: "Практическое задание 2", fileUrl: "#" },
  ],
};

const CourseContentPage = () => {
    
    const navigate = useNavigate();
    const { t } = useTranslation();
  return (
    <Box>
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
          onClick={() => navigate("/")} // Переход на страницу входа/авторизации
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
            onClick={() => navigate("/auth")} // Переход на страницу входа/авторизации
          >
            {t("header.login")}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Cours content */}
      <Box sx={{ padding: 3 }}>
        {/* Cours name */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: 3, color: "#1a237e" }}
        >
          {courseData.title}
        </Typography>

        {/* Video lesson */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          <Card sx={{ width: "80%", backgroundColor: "#f5f5f5" }}>
            <CardMedia
              component="video"
              controls
              src={courseData.videoUrl}
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
            <CardContent>
              <Typography variant="body1">{courseData.description}</Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
            color: "#1a237e",
          }}
        >
          Основной материал
        </Typography>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="body1">
            В этом разделе представлены дополнительные материалы для выполнения заданий.
          </Typography>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            {courseData.practicalMaterials.map((material) => (
              <li key={material.id}>
                <Button
                  variant="text"
                  startIcon={<PlayCircleOutlineIcon />}
                  sx={{
                    textTransform: "none",
                    color: "#1a237e",
                  }}
                  href={material.fileUrl}
                >
                  {material.name}
                </Button>
              </li>
            ))}
          </ul>
        </Paper>
      </Box>
    </Box>
  );
};

export default CourseContentPage;