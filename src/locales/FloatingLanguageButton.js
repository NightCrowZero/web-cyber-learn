import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const FloatingLanguageButton = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <Button
        variant="contained"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ borderRadius: "50%", minWidth: "50px", height: "50px" }}
      >
        🌐
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => i18n.changeLanguage("ru")}>🇷🇺 Русский</MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("ua")}>🇺🇦 Українська</MenuItem>
      </Menu>
    </div>
  );
};

export default FloatingLanguageButton;