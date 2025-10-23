import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { getNextId, defaultEducationEntry, defaultExperienceEntry } from '../data/mockUsers'; 

const AddUserModal = ({ show, handleClose, users, setUsers }) => {
    
    const [newUserData, setNewUserData] = useState({
        name: '', 
        email: '', 
        contact: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newUserData.name || !newUserData.email) {
            console.error("Please enter a User name and Email.");
            return;
        }

        const nameParts = newUserData.name.trim().split(/\s+/);
        const firstName = nameParts[0] || 'New';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'User';

        // Create the New User Object with default empty arrays/values for completeness
        const newUser = {
            id: getNextId(users),
            firstName,
            lastName,
            email: newUserData.email,
            phone: newUserData.contact,
            gender: '',
            yearOfBirth: '',
            address: '',
            pincode: '',
            domicileState: '',
            domicileCountry: '',
            
            education: [],
            skills: [],
            projects: [],
            workExperience: [],
            linkedinUrl: '',
            resumeUrl: '',
        };

        setUsers(prevUsers => [...prevUsers, newUser]);

        setNewUserData({ name: '', email: '', contact: '' });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name of the user</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Type here"
                            value={newUserData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Type here"
                                    value={newUserData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="contact"
                                    placeholder="Type here"
                                    value={newUserData.contact}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddUserModal;