import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Box, IconButton, Tooltip, } from "@mui/material";
import { useTranslation } from "react-i18next";
import SecurityIcon from "@mui/icons-material/Security";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"; // React Router для навигации


const popularCourses = [
  {
    id: 1,
    title: "Основы кибербезопасности",
    description: "Начальный курс по защите данных.",
    image: "https://utimaco.com/sites/default/files/styles/ut_stage_l_jpeg/public/2022-09/The_importance_of_cybersecurity.jpg.webp?itok=BW6MznUE?text=Курс+1",
  },
  {
    id: 2,
    title: "Пентестинг для начинающих",
    description: "Практические навыки тестирования.",
    image: "https://cdn.plainconcepts.com/wp-content/uploads/2022/10/pentesting.jpg?text=Курс+2",
  },
  {
    id: 3,
    title: "Симуляция DDoS-атаки",
    description: "Учитесь отражать DDoS-атаки.",
    image: "https://i.pcmag.com/imagery/articles/06p7dD5ozwPObXAgoQwc2F0-1..v1720198532.jpg?text=Курс+3",
  },
];

const otherCourses = [
  {
    id: 4,
    title: "Киберугрозы в реальном мире",
    description: "Рассматриваем реальные кейсы.",
    image: "https://www.veridify.com/wp-content/uploads/2024/04/IoT-Cybersecurity-300x200-1.png?text=Курс+4",
  },
  {
    id: 5,
    title: "Криптография",
    description: "Основы криптографической защиты.",
    image: "https://thecuberesearch.com/wp-content/uploads/Hackers-have-the-advantage-with-AI-300x200.jpg?text=Курс+5",
  },
  {
    id: 6,
    title: "Социальная инженерия",
    description: "Защита от человеческого фактора.",
    image: "https://www.asdwa.org/wp-content/uploads/2023/03/whitehousecyber_thumb-1-300x200.webp?text=Курс+6",
  },
];

const HomePage = () => {
  
  const navigate = useNavigate(); 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflowX: "hidden", background: "#121212" }}>
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
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }}>
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

      {/* Navigation bar */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 10,
        }}
      >
        <Tooltip title="Популярные курсы" placement="right">
          <IconButton
            sx={{
              color: "#00e5ff",
              ":hover": { color: "#007bff" },
            }}
          >
            <DashboardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Все курсы" placement="right">
          <IconButton
            sx={{
              color: "#00e5ff",
              ":hover": { color: "#007bff" },
            }}
          >
            <SecurityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="О сервисе" placement="right">
          <IconButton
            sx={{
              color: "#00e5ff",
              ":hover": { color: "#007bff" },
            }}
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Контакты" placement="right">
          <IconButton
            sx={{
              color: "#00e5ff",
              ":hover": { color: "#007bff" },
            }}
          >
            <ContactMailIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1, padding: 3, overflowY: "auto", height: "100vh", overflowX: "hidden", }}>
        {/* Popular corses */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#00e5ff",
            fontFamily: "Share Tech Mono, monospace",
            textAlign: "center",
          }}
        >
          {t("course.popular_courses")}
        </Typography>
        <Slider {...sliderSettings}>
          {popularCourses.map((course) => (
            <Box key={course.id} sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  display: "inline-block",
                  width: "80%",
                  margin: "0 auto",
                  background: "linear-gradient(180deg, #001f3f, #001a2e)",
                  color: "#fff",
                  boxShadow: "0px 4px 15px rgba(0, 229, 255, 0.2)",
                }}
              >
                <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  objectFit: "fill", // Изображение адаптируется под контейнер (cover/fill/contain)
                  width: "100%", 
                  height: "200px", 
                }}
                onClick={() => navigate(`/course/${course.id}`)} 
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00e5ff",
                      fontFamily: "Share Tech Mono, monospace",
                    }}
                    onClick={() => navigate(`/course/${course.id}`)} 
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>

        {/* Main corses */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#007bff",
            fontFamily: "Share Tech Mono, monospace",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          {t("course.other_courses")}
        </Typography>
        <Grid container spacing={3} sx={{ maxWidth: "100%", margin: "0 auto" }}>
          {otherCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id} sx={{ maxWidth: "100%", margin: "0 auto" }}>
              <Card
                sx={{
                  background: "linear-gradient(180deg, #001f3f, #001a2e)",
                  color: "#fff",
                  boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    objectFit: "fill", 
                    width: "100%", 
                    height: "200px", 
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00e5ff",
                      fontFamily: "Share Tech Mono, monospace",
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    {course.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #001f3f, #007bff)",
                    color: "#fff",
                    fontFamily: "Share Tech Mono, monospace",
                    fontWeight: "bold",
                    ":hover": { background: "#0056b3" },
                  }}
                  onClick={() => navigate("/course-content")} 
                >
                  {t("course.more")}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
