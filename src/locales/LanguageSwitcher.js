import React from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ padding: "10px", textAlign: "right" }}>
          <Select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            variant="outlined"
            sx={{
              marginLeft: 2,
              backgroundColor: "rgba(255,255,255,0.1)", 
              color: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" }, 
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <MenuItem value="ru">🇷🇺 Русский</MenuItem>
            <MenuItem value="en">🇬🇧 English</MenuItem>
            <MenuItem value="ua">🇺🇦 Українська</MenuItem>
          </Select>
    </div>
  );
};

export default LanguageSwitcher;