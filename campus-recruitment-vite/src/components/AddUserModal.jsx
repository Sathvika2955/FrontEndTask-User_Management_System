import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { getNextId } from '../data/mockUsers'; 

const AddUserModal = ({ handleClose, users, setUsers }) => {
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

  // Custom color styles
  const styles = {
    cancelButton: {
      backgroundColor: '#E9E1FF', // light lavender
      color: '#5A4FCF', // slightly darker text for contrast
      border: 'none',
    },
    addButton: {
      backgroundColor: '#7B61FF', // bright lavender
      color: 'white',
      border: 'none',
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* Scrollable form area */}
      <div className="flex-grow-1 overflow-auto p-3">
        <Form id="adduser-form" onSubmit={handleSubmit}>
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
        </Form>
      </div>

      {/* Sticky footer for buttons */}
      <div className="adduser-actions-footer d-flex justify-content-end gap-2 p-3 bg-white border-top">
        <Button
          style={styles.cancelButton}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          style={styles.addButton}
          type="submit"
          form="adduser-form"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddUserModal;