import React from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";

const AppHeader = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 30px",
      borderBottom: "1px solid #ddd",
      backgroundColor: "#fff",
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px", // smaller gap between box and text
    },
    logoBox: {
      border: "2px solid #000",
      padding: "4px 12px",
      fontWeight: "900",
      fontSize: "26px", // 🔹 bigger text
      letterSpacing: "-2px", // 🔹 tighter spacing between letters
      lineHeight: "1",
    },
    logoText: {
      textAlign: "center",
      lineHeight: "1",
    },
    logoTextP: {
      margin: 0,
      fontSize: "6px", // small so box stands out
      fontWeight: "500",
      letterSpacing: "0.3px",
      color: "#444",
    },
    icons: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    icon: {
      fontSize: "20px",
      cursor: "pointer",
      color: "#000",
      transition: "transform 0.2s ease, color 0.2s ease",
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.color = "#007bff";
  };
  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.color = "#000";
  };

  return (
    <header style={styles.header}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <div style={styles.logoBox}>LOGO</div>
        <div style={styles.logoText}>
          <p style={styles.logoTextP}>ESTD</p>
          <p style={styles.logoTextP}>2025</p>
        </div>
      </div>

      {/* Icons Section */}
      <div style={styles.icons}>
        <MdOutlineHeadsetMic
          style={styles.icon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <FiBell
          style={styles.icon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <FiUser
          style={styles.icon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </header>
  );
};

export default AppHeader;