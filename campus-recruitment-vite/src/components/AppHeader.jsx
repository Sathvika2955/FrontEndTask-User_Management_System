
import React from 'react';
import { Nav } from 'react-bootstrap';
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FiBell, FiUser } from "react-icons/fi";


const AppHeader = () => {
  return (
    <header
      className="custom-header"
      style={{
        width: "100%",
        minHeight: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "16px 32px"
      }}
    >
      <div className="logo-stack">
        <div className="logo-box">
          <span className="logo-text">LOGO</span>
        </div>
        <div className="logo-estd">ESTD</div>
        <div className="logo-year">2025</div>
      </div>
      <Nav className="header-icons">
  <Nav.Link href="#support" className="icon-link">
    <MdOutlineHeadsetMic size={24} color="#18181B" />
  </Nav.Link>
  <Nav.Link href="#notifications" className="icon-link">
    <FiBell size={24} color="#18181B" />
  </Nav.Link>
  <Nav.Link href="#profile" className="icon-link profile-icon-link">
    <span className="profile-avatar">
      <FiUser size={28} color="#6834ff" />
    </span>
  </Nav.Link>
</Nav>
    </header>
  );
};

export default AppHeader;
