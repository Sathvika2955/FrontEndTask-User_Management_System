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
    setData(prevData => ({
      ...prevData,
      workExperience: [...prevData.workExperience, defaultExperienceEntry],
    }));
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
      window.open(data.resumeUrl, '_blank');
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
          <Card
            key={index}
            className="mb-4 p-3 bg-light position-relative border-0"
            style={{ borderRadius: 14 }}
          >
            <Button
              variant="link"
              className="text-danger position-absolute top-0 end-0 me-2 mt-2"
              onClick={() => removeExperience(index)}
              aria-label="Remove work experience entry"
            >
              <RiDeleteBin6Line size={18} />
            </Button>
            <Row>
              <Col md={8}>
                <Form.Label>Domain</Form.Label>
                <Form.Control
                  name="domain"
                  placeholder="e.g. Technology"
                  value={exp.domain}
                  onChange={e => handleExperienceChange(index, e)}
                />
                <Form.Label className="mt-2 mb-1" style={{ fontSize: "0.97em", color: "#888" }}>
                  Sub-domain
                </Form.Label>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      height: 32,
                      width: 4,
                      borderRadius: 4,
                      background: "#836FFF",
                      marginRight: 7,
                      opacity: 0.7
                    }}
                  />
                  <Form.Control
                    name="subDomain"
                    placeholder="e.g. MERN Stack"
                    value={exp.subDomain}
                    onChange={e => handleExperienceChange(index, e)}
                    style={{ marginBottom: 0 }}
                  />
                </div>
              </Col>
              <Col md={4} className="align-self-end">
                <Form.Label>Experience</Form.Label>
                <Form.Select
                  name="experience"
                  value={exp.experience}
                  onChange={e => handleExperienceChange(index, e)}
                >
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

        <Row>
          <Col md={6} className="mb-3">
            <Card className="p-3 border-0" style={{ borderRadius: 14, background: "rgba(246,246,250,0.95)" }}>
              <h6 className="fw-bold mb-2">LinkedIn</h6>
              <Form.Label className="mb-1" style={{ fontWeight: 400, fontSize: '0.97em' }}>Profile URL</Form.Label>
              <Form.Control
                type="url"
                name="linkedinUrl"
                placeholder="Profile URL"
                value={data.linkedinUrl || ''}
                onChange={handleLinkChange}
              />
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="p-3 border-0" style={{ borderRadius: 14, background: "rgba(246,246,250,0.95)" }}>
              <h6 className="fw-bold mb-2">Resume</h6>
              <Form.Label className="mb-1" style={{ fontWeight: 400, fontSize: '0.97em' }}></Form.Label>
              <div className="d-flex align-items-center">
                <span style={{ color: "#836fff", fontSize: "1.25em", marginRight: "8px" }}>
                  <i className="bi bi-file-earmark-pdf"></i>
                </span>
                <span className="text-muted">{data.resumeUrl?.split('/').pop() || 'N/A'}</span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="ms-2"
                  disabled={!data.resumeUrl}
                  onClick={handleViewResume}
                >View</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ExperienceForm;
