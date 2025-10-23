import React from 'react';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { defaultExperienceEntry } from '../data/mockUsers';
import { BiPencil } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';

const ExperienceForm = ({ data, setData }) => {

    // --- Experience Handlers ---
    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = data.workExperience.map((item, i) => 
            i === index ? { ...item, [name]: value } : item
        );
        setData(prevData => ({ ...prevData, workExperience: updatedExperience }));
    };

    const addExperience = () => {
        setData(prevData => ({ ...prevData, workExperience: [...prevData.workExperience, defaultExperienceEntry] }));
    };

    const removeExperience = (index) => {
        const updatedExperience = data.workExperience.filter((_, i) => i !== index);
        setData(prevData => ({ ...prevData, workExperience: updatedExperience }));
    };

    // --- Link Handlers ---
    const handleLinkChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleViewResume = () => {
        if (data.resumeUrl) {
            // In a real environment, this would open the file URL.
            console.log(`Viewing resume at: ${data.resumeUrl}`);
            // window.open(data.resumeUrl, '_blank'); // Uncomment if running in an environment that allows this
        } else {
             console.log("No resume URL available.");
        }
    };

    return (
        <Card className="p-4 border-0">
            <Row className="mb-4 align-items-center">
                 <Col>
                    <h5 className="mb-0">Work Experience</h5>
                 </Col>
                 <Col xs="auto">
                    <BiPencil size={18} className="text-muted cursor-pointer" />
                 </Col>
            </Row>
            
            <Form>
                {/* Work Experience Repeater Block */}
                {data.workExperience && data.workExperience.map((exp, index) => (
                    <Card key={index} className="mb-4 p-3 bg-light position-relative">
                        <Button 
                            variant="link" 
                            className="text-danger position-absolute top-0 end-0 me-2 mt-2" 
                            onClick={() => removeExperience(index)}
                            aria-label="Remove work experience entry"
                        >
                            <RiDeleteBin6Line size={18} />
                        </Button>
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Label>Domain</Form.Label>
                                <Form.Control name="domain" placeholder="e.g. Technology" value={exp.domain} onChange={(e) => handleExperienceChange(index, e)} />
                            </Col>
                            <Col md={4}>
                                <Form.Label>Sub domain</Form.Label>
                                <Form.Control name="subDomain" placeholder="e.g. MERN Stack" value={exp.subDomain} onChange={(e) => handleExperienceChange(index, e)} />
                            </Col>
                            <Col md={4}>
                                <Form.Label>Experience</Form.Label>
                                <Form.Select name="experience" value={exp.experience} onChange={(e) => handleExperienceChange(index, e)}>
                                    <option value="">Select an option</option>
                                    <option value="0-1 year">0-1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="3+ years">3+ years</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Card>
                ))}
                
                <Button variant="outline-secondary" onClick={addExperience} className="mb-5">
                    + Add Work Experience
                </Button>


                <h5 className="mt-3 mb-4">LinkedIn & Resume</h5>
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control 
                            type="url"
                            name="linkedinUrl"
                            placeholder="Profile URL" 
                            value={data.linkedinUrl || ''}
                            onChange={handleLinkChange}
                        />
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Label>Resume</Form.Label>
                        <div className="d-flex align-items-center">
                            <Form.Control 
                                type="text"
                                name="resumeUrl"
                                readOnly 
                                placeholder="myresume.pdf"
                                value={data.resumeUrl || 'No file uploaded'}
                            />
                            <Button 
                                variant="outline-info" 
                                className="ms-2 d-flex align-items-center" 
                                disabled={!data.resumeUrl || data.resumeUrl === 'No file uploaded'}
                                onClick={handleViewResume}
                            >
                                <FiEye className="me-1" /> View
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default ExperienceForm;