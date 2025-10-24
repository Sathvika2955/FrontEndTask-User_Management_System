import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
  Offcanvas,
} from 'react-bootstrap';
import { FiTrash2, FiEye } from 'react-icons/fi';
import AddUserModal from '../components/AddUserModal';

const UserList = ({ users, setUsers, confirmAction, onViewUser }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleDelete = (id) => {
    if (confirmAction('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  return (
    <Container fluid className="py-4 px-5">
      <Card className="p-4 border-0 shadow-sm rounded-4">
        {/* Header */}
        <Row className="align-items-center mb-3">
          <Col>
            <h5 className="mb-0 fw-semibold">Users</h5>
          </Col>
          <Col className="text-end">
            <Button
              variant="primary"
              className="px-3 py-2 fw-semibold rounded-3"
              style={{ backgroundColor: '#7b61ff', border: 'none' }}
              onClick={handleShowOffcanvas}
            >
              + Add user
            </Button>
          </Col>
        </Row>

        {/* Table */}
        {users.length === 0 ? (
          <p className="text-center py-5 text-muted mb-0">
            No users found. Click <strong>“Add user”</strong> to create one.
          </p>
        ) : (
          <Table
            hover
            responsive
            className="align-middle mb-0"
            style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}
          >
            <thead
              style={{
                backgroundColor: '#f8f9fa',
                fontWeight: 600,
                color: '#495057',
              }}
            >
              <tr>
                <th style={{ width: '10%' }}>Sr. No</th>
                <th style={{ width: '30%' }}>User name</th>
                <th style={{ width: '45%' }}>E-mail</th>
                <th className="text-center" style={{ width: '15%' }}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="bg-white shadow-sm rounded-3">
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/profile/${user.id}`}
                      className="text-decoration-none text-dark fw-medium"
                    >
                      {user.firstName} {user.lastName}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <Button
                        variant="link"
                        className="text-secondary p-0"
                        onClick={() => onViewUser?.(user)}
                        aria-label={`View user ${user.firstName}`}
                      >
                        <FiEye size={18} />
                      </Button>

                      <Button
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => handleDelete(user.id)}
                        aria-label={`Delete user ${user.firstName}`}
                      >
                        <FiTrash2 size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Offcanvas (Add User Form) */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
        backdrop={false}
        style={{ width: 520 }}
      >
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