import React from 'react';
import { Nav } from 'react-bootstrap';
import { FiSettings, FiUser } from 'react-icons/fi';

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
        <div className="logo-year mt-1">2025</div>
        <div className="logo-estd">ESTD</div>
      </div>
      <Nav className="pt-1">
        <Nav.Link href="#settings" className="mx-2 text-dark">
          <FiSettings size={22} />
        </Nav.Link>
        <Nav.Link href="#profile-icon" className="text-dark">
          <FiUser size={22} />
        </Nav.Link>
      </Nav>
    </header>
  );
};

export default AppHeader;
