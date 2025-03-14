import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";

const coursesData = {
  "1": {
    title: "Основы кибербезопасности",
    lessons: [
      { id: 1, title: "Введение в кибербезопасность" },
      { id: 2, title: "Основные угрозы и атаки" },
      { id: 3, title: "Безопасность паролей и аутентификация" },
      { id: 4, title: "Защита персональных данных" },
    ],
  },
  "3": {
    title: "Продвинутый этичный хакинг",
    lessons: [
      { id: 1, title: "Основы этичного хакинга" },
      { id: 2, title: "Тестирование на проникновение" },
      { id: 3, title: "Эксплуатация уязвимостей" },
      { id: 4, title: "Противодействие атакам" },
    ],
  },
};

const CourseLessonsPage = () => {
  const { courseId } = useParams(); 
  const navigate = useNavigate();

  const course = coursesData[courseId]; 
  if (!course) {
    return (
      <Container 
        sx={{ 
            textAlign: "center", 
            padding: 4,
            minHeight: "94vh", 
        }}
      >
        <Typography variant="h4" color="error">Курс не найден</Typography>
        <Button variant="contained" sx={{ marginTop: 2 }} onClick={() => navigate("/")}>
          Вернуться на главную
        </Button>
      </Container>
    );
  }

  return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "94vh", 
        }}
    >
      {/* Up panel */}
      <AppBar position="static" sx={{ background: "linear-gradient(90deg, #1a237e, #0d47a1)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#00e5ff" }}>
            CyberFuturism
          </Typography>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }} onClick={() => navigate("/")}>
            Главная
          </Button>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }} onClick={() => navigate("/my-courses")}>
            Мои курсы
          </Button>
          <Button color="inherit" sx={{ color: "#fff", fontWeight: "bold" }} onClick={() => navigate("/contacts")}>
            Контакты
          </Button>
        </Toolbar>
      </AppBar>

      {/* Page content */}
      <Container sx={{ padding: 4 }}>
        <Typography variant="h3" sx={{ marginBottom: 2, color: "#1a237e", textAlign: "center" }}>
          {course.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 4, textAlign: "center" }}>
          Выберите урок для продолжения обучения
        </Typography>

        
        <Card sx={{ background: "#f5f5f5", padding: 3 }}>
          <CardContent>
            <List>
              {course.lessons.map((lesson) => (
                <ListItem 
                  key={lesson.id} 
                  button 
                  onClick={() => navigate(`/course/${courseId}/lesson/${lesson.id}`)}
                >
                  <ListItemText primary={lesson.title} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Button 
          variant="contained" 
          sx={{ background: "#1a237e", color: "#fff", marginTop: 3 }} 
          onClick={() => navigate("/user-courses")}
        >
          Назад к курсам
        </Button>
      </Container>
    </Box>
  );
};

export default CourseLessonsPage;