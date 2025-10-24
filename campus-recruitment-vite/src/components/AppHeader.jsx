import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FiSettings, FiUser } from 'react-icons/fi';

const AppHeader = () => {
  return (
    <header className="custom-header p-0 m-0">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center pt-4"
        style={{ maxWidth: "900px" }}
      >
        <div className="text-center mx-auto w-100">
          {/* LOGO in box */}
          <div className="logo-box mx-auto mb-1">
            <span className="logo-text">LOGO</span>
          </div>
          {/* ESTD 2025 */}
          <div className="estd-text">ESTD 2025</div>
        </div>
        {/* Right-side icons */}
        <Nav className="position-absolute top-0 end-0 p-4">
          <Nav.Link href="#settings" className="mx-2 text-dark">
            <FiSettings size={22} />
          </Nav.Link>
          <Nav.Link href="#profile-icon" className="text-dark">
            <FiUser size={22} />
          </Nav.Link>
        </Nav>
      </Container>
      <hr className="m-0" />
    </header>
  );
};

export default AppHeader;
