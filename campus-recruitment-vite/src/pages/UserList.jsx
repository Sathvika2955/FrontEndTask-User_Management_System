import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Card, Offcanvas } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddUserModal from '../components/AddUserModal';

const UserList = ({ users, setUsers, confirmAction }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleDelete = (id) => {
    if (confirmAction("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  return (
    <Container fluid className="py-4 px-5">
      <Card className="p-4 shadow-sm">
        <Row className="align-items-center mb-4">
          <Col>
            <h2 className="mb-0">Users</h2>
          </Col>
          <Col className="text-end">
            <Button variant="primary" onClick={handleShowOffcanvas}>
              + Add user
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            {users.length === 0 ? (
              <p className="text-center p-5 text-muted">No users found. Click "Add user" to create one.</p>
            ) : (
              <Table responsive hover className="shadow-sm custom-user-table">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>User name</th>
                    <th>E-mail</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/profile/${user.id}`} className="text-decoration-none fw-medium text-dark">
                          {user.firstName} {user.lastName}
                        </Link>
                      </td>
                      <td>{user.email}</td>
                      <td>
                        <Button
                          variant="link"
                          className="text-muted p-0"
                          onClick={() => handleDelete(user.id)}
                          aria-label={`Delete user ${user.firstName}`}
                        >
                          <RiDeleteBin6Line size={18} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Card>

      {/* Offcanvas for Add User */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" backdrop={false} style={{ width: 520 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddUserModal
            handleClose={handleCloseOffcanvas}
            users={users}
            setUsers={setUsers}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default UserList;
