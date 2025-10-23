import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiSettings, FiUser } from 'react-icons/fi'; // Using Feather Icons as a lightweight alternative

const AppHeader = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm border-bottom mb-4 p-3">
            {/* Using fluid Container ensures it spans the full width */}
            <Container fluid>
                <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
                    <span className="h4 mb-0 me-2">LOGO</span>
                    <span className="text-muted mb-0">UI</span>
                </Navbar.Brand>
                
                <Nav className="ms-auto">
                    <Nav.Link href="#settings" className="mx-2 text-dark">
                        <FiSettings size={20} />
                    </Nav.Link>
                    <Nav.Link href="#profile-icon" className="text-dark">
                        <FiUser size={20} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppHeader;