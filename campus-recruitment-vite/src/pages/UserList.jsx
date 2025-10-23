import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri'; 
import { FiSearch } from 'react-icons/fi';
import AddUserModal from '../components/AddUserModal'; 

const UserList = ({ users, setUsers, confirmAction }) => {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDelete = (id) => {
        // Use custom confirmation function instead of window.confirm
        if (confirmAction("Are you sure you want to delete this user?")) {
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers); 
        }
    };

    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // Use Container fluid for full-width layout
        <Container fluid className="py-4 px-5"> 
            <Card className="p-4 shadow-sm">
                
                {/* Header and Add User Button */}
                <Row className="align-items-center mb-4">
                    <Col>
                        <h2 className="mb-0">Users</h2>
                    </Col>
                    <Col className="text-end">
                        <Button 
                            variant="primary" 
                            onClick={handleShow} 
                        >
                            + Add user
                        </Button>
                    </Col>
                </Row>
                
                {/* Search Bar */}
                <Row className="mb-3">
                    <Col md={4}>
                         <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search users..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                             <span className="input-group-text"><FiSearch /></span>
                         </div>
                    </Col>
                </Row>

                {/* User List Table */}
                <Row>
                    <Col>
                        {filteredUsers.length === 0 ? (
                            <p className="text-center p-5 text-muted">No users found matching your criteria. Click "Add user" to create one.</p>
                        ) : (
                            <Table responsive hover className="shadow-sm">
                                <thead>
                                    <tr>
                                        <th style={{ width: '5%' }}>Sr. No</th>
                                        <th style={{ width: '40%' }}>User name</th>
                                        <th style={{ width: '45%' }}>E-mail</th>
                                        <th style={{ width: '10%' }}>Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user, index) => (
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

            <AddUserModal 
                show={showModal} 
                handleClose={handleClose} 
                users={users} 
                setUsers={setUsers} 
            />
        </Container>
    );
};

export default UserList;