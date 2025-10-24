import React from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const BasicDetailsForm = ({ data, setData }) => {
    
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePhoneChange = (value, country, e, formattedValue) => {
        setData(prevData => ({
            ...prevData,
            phone: formattedValue,
            phoneCountry: country.name,
        }));
    };

    return (
        <Card className="p-4 border-0 shadow-sm">
            <Row className="mb-3 align-items-center">
                <Col>
                    <h5 className="mb-0">Basic Details</h5>
                </Col>
                <Col xs="auto">
                    <BiPencil size={18} className="text-muted cursor-pointer" />
                </Col>
            </Row>

            <Form>
                {/* First Row: First Name / Last Name / Email ID */}
                <Row className="mb-3">
                    <Col md={4} className="mb-3 mb-md-0">
                        <Form.Label>First name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="firstName"
                            placeholder="e.g. John"
                            onChange={handleFieldChange}
                        />
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="lastName"
                            placeholder="e.g. Doe"
                            onChange={handleFieldChange}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="e.g. johndoe@gmail.com"
                            onChange={handleFieldChange}
                        />
                    </Col>
                </Row>

                {/* Second Row: Year of Birth / Gender / Phone / Alternate Phone */}
                <Row className="mb-3">
                    <Col md={3} className="mb-3 mb-md-0">
                        <Form.Label>Year of birth</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="yearOfBirth"
                            placeholder="YYYY" 
                            onChange={handleFieldChange}
                        />
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select name="gender" value={data.gender || ''} onChange={handleFieldChange}>
                            <option value="">Select an option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <Form.Label>Phone number</Form.Label>
                        <PhoneInput
                            country={'in'}
                            value={data.phone || ''}
                            onChange={handlePhoneChange}
                            inputStyle={{ width: '100%' }}
                        />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Alternate Phone no</Form.Label>
                        <Form.Control 
                            type="tel" 
                            name="alternatePhone"
                            placeholder="e.g. 9876543210"
                            onChange={handleFieldChange}
                        />
                    </Col>
                </Row>
                
                {/* Third Row: Address / Pincode / Domicile State / Domicile Country */}
                <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={5} 
                            name="address"
                            placeholder="Enter full address here..." 
                            onChange={handleFieldChange}
                        />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col sm={6} className="mb-3">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter here" 
                                    onChange={handleFieldChange}
                                />
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Label>Domicile state</Form.Label>
                                <Form.Select name="domicileState" value={data.domicileState || ''} onChange={handleFieldChange}>
                                    <option value="">Select an option</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Karnataka">Karnataka</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Label>Domicile country</Form.Label>
                                <Form.Select name="domicileCountry" value={data.domicileCountry || ''} onChange={handleFieldChange}>
                                    <option value="">Select an option</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default BasicDetailsForm;