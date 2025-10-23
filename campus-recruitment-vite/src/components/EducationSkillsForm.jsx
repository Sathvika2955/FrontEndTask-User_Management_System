import React from 'react';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { defaultEducationEntry } from '../data/mockUsers';
import { BiPencil } from 'react-icons/bi';

const EducationSkillsForm = ({ data, setData }) => {

    // --- Education Handlers ---
    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = data.education.map((item, i) => 
            i === index ? { ...item, [name]: value } : item
        );
        setData(prevData => ({ ...prevData, education: updatedEducation }));
    };

    const addEducation = () => {
        setData(prevData => ({ ...prevData, education: [...prevData.education, defaultEducationEntry] }));
    };

    const removeEducation = (index) => {
        const updatedEducation = data.education.filter((_, i) => i !== index);
        setData(prevData => ({ ...prevData, education: updatedEducation }));
    };

    // --- Skills/Projects Handlers ---
    const handleSkillsChange = (e) => {
        const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        setData(prevData => ({ ...prevData, skills: skillsArray }));
    };

    const handleProjectsChange = (e) => {
        const projectsArray = e.target.value.split(',').map(p => p.trim()).filter(p => p.length > 0);
        setData(prevData => ({ ...prevData, projects: projectsArray }));
    };


    return (
        <Card className="p-4 border-0">
            <Row className="mb-4 align-items-center">
                 <Col>
                    <h5 className="mb-0">Education Details</h5>
                 </Col>
                 <Col xs="auto">
                    <BiPencil size={18} className="text-muted cursor-pointer" />
                 </Col>
            </Row>

            <Form>
                {/* Education Repeater Block */}
                {data.education && data.education.map((edu, index) => (
                    <Card key={index} className="mb-4 p-3 bg-light position-relative">
                        <Button 
                            variant="link" 
                            className="text-danger position-absolute top-0 end-0 me-2 mt-2" 
                            onClick={() => removeEducation(index)}
                            aria-label="Remove education entry"
                        >
                            <RiDeleteBin6Line size={18} />
                        </Button>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>School / College</Form.Label>
                                <Form.Control name="college" placeholder="e.g. Lincoln College" value={edu.college} onChange={(e) => handleEducationChange(index, e)} />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Highest degree or equivalent</Form.Label>
                                <Form.Control name="degree" placeholder="e.g. Bachelors in Technology" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Course</Form.Label>
                                <Form.Control name="course" placeholder="e.g. Computer science engineering" value={edu.course} onChange={(e) => handleEducationChange(index, e)} />
                            </Col>
                            <Col md={3}>
                                <Form.Label>Year of completion</Form.Label>
                                <Form.Control name="year" placeholder="YYYY" value={edu.year} onChange={(e) => handleEducationChange(index, e)} />
                            </Col>
                            <Col md={3}>
                                <Form.Label>Grade</Form.Label>
                                <Form.Control name="grade" placeholder="Enter here" value={edu.grade} onChange={(e) => handleEducationChange(index, e)} />
                            </Col>
                        </Row>
                    </Card>
                ))}
                
                <Button variant="outline-secondary" onClick={addEducation} className="mb-5">
                    + Add Education
                </Button>


                <Row className="mb-4 align-items-center mt-4">
                     <Col>
                        <h5 className="mb-0">Skills & Projects</h5>
                     </Col>
                     <Col xs="auto">
                        <BiPencil size={18} className="text-muted cursor-pointer" />
                     </Col>
                </Row>
                
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Label>Skills (Comma Separated)</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter here (e.g., React, Node.js, Bootstrap)" 
                            value={data.skills ? data.skills.join(', ') : ''}
                            onChange={handleSkillsChange}
                        />
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Label>Projects (Comma Separated)</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter here (e.g., Project Alpha, My Portfolio)" 
                            value={data.projects ? data.projects.join(', ') : ''}
                            onChange={handleProjectsChange}
                        />
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default EducationSkillsForm;