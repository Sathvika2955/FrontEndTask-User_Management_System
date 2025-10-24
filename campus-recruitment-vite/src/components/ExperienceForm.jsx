import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const ExperienceForm = () => {
  const [data, setData] = useState({
    workExperience: [{ domain: "", subDomain: "", experience: "" }],
    linkedIn: "linkedin.com/in/mrbean",
    resumeFileName: "myresume.pdf",
  });

  const [isEditable, setIsEditable] = useState({
    workExperience: false,
    linkedIn: false,
    resume: false,
  });

  // Toggle section edit mode
  const toggleEdit = (section) => {
    setIsEditable((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Handle input changes
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...data.workExperience];
    updatedExperiences[index][name] = value;
    setData({ ...data, workExperience: updatedExperiences });
  };

  const handleLinkedInChange = (e) => {
    setData({ ...data, linkedIn: e.target.value });
  };

  const handleResumeChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setData({ ...data, resumeFileName: file.name });
    }
  };

  // Add / Remove experience rows
  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { domain: "", subDomain: "", experience: "" },
      ],
    }));
  };

  const removeExperience = (index) => {
    const updated = [...data.workExperience];
    updated.splice(index, 1);
    setData({ ...data, workExperience: updated });
  };

  return (
    <div className="mt-4">
      {/* ===== Work Experience Section ===== */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 style={{ fontWeight: 600, marginBottom: 0 }}>Work Experience</h5>
        <div
          onClick={() => toggleEdit("workExperience")}
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isEditable.workExperience
              ? "rgba(108,99,255,0.2)"
              : "rgba(139,109,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "0.3s",
          }}
          title={
            isEditable.workExperience
              ? "Lock Work Experience"
              : "Edit Work Experience"
          }
        >
          <BiPencil size={16} color="#8b6dff" />
        </div>
      </div>

      {/* ===== Work Experience Cards ===== */}
      {data.workExperience.map((exp, index) => (
        <Card
          key={index}
          className="mb-4 p-3 border-0 shadow-sm"
          style={{
            background: "rgba(249,249,253,0.9)",
            borderRadius: 14,
            position: "relative",
          }}
        >
          {data.workExperience.length > 1 && (
            <Button
              variant="link"
              className="text-danger position-absolute top-0 end-0 me-2 mt-2"
              onClick={() => removeExperience(index)}
            >
              <RiDeleteBin6Line size={18} />
            </Button>
          )}

          <Row>
            {/* Domain + Sub-domain */}
            <Col md={8}>
              <div
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 12,
                  padding: "16px 18px",
                  background: "#f8f8fc",
                }}
              >
                <Form.Label
                  style={{
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: "#333",
                  }}
                >
                  Domain
                </Form.Label>
                <Form.Control
                  name="domain"
                  placeholder="e.g. Technology"
                  value={exp.domain}
                  onChange={(e) => handleExperienceChange(index, e)}
                  disabled={!isEditable.workExperience}
                  style={{
                    background: "#fff",
                    height: "44px",
                    borderColor: "#ddd",
                    width: "97%",
                  }}
                />

                {/* Sub-domain inside grey section */}
                <div
                  style={{
                    marginTop: 16,
                    marginLeft: 12,
                    paddingLeft: 12,
                    borderLeft: "3px solid #d0d0d0",
                  }}
                >
                  <Form.Label
                    style={{
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    Sub-domain
                  </Form.Label>
                  <Form.Control
                    name="subDomain"
                    placeholder="e.g. MERN Stack"
                    value={exp.subDomain}
                    onChange={(e) => handleExperienceChange(index, e)}
                    disabled={!isEditable.workExperience}
                    style={{
                      background: "#fff",
                      height: "40px",
                      borderColor: "#ddd",
                      width: "88%",
                    }}
                  />
                </div>
              </div>
            </Col>

            {/* Experience Dropdown */}
            <Col md={4} className="align-self-end">
              <Form.Label style={{ fontWeight: 500, color: "#333" }}>
                Experience
              </Form.Label>
              <Form.Select
                name="experience"
                value={exp.experience}
                onChange={(e) => handleExperienceChange(index, e)}
                disabled={!isEditable.workExperience}
                style={{
                  background: "#fff",
                  borderColor: "#ddd",
                  height: "44px",
                }}
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

      {/* ===== Add Work Experience Button ===== */}
      {isEditable.workExperience && (
        <Button
          variant="outline-primary"
          className="d-flex align-items-center gap-2"
          style={{
            borderColor: "#8b6dff",
            color: "#8b6dff",
            fontWeight: 500,
            marginBottom: "2rem",
            background: "transparent",
          }}
          onClick={addExperience}
        >
          <AiOutlinePlus size={18} /> Add Work Experience
        </Button>
      )}

      {/* ===== LinkedIn + Resume Row ===== */}
      <Row className="mt-2">
        {/* LinkedIn */}
        <Col md={6}>
          <Card
            className="p-3 border-0 shadow-sm h-100"
            style={{
              background: "rgba(249,249,253,0.9)",
              borderRadius: 14,
              position: "relative",
            }}
          >
            <div
              onClick={() => toggleEdit("linkedIn")}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: isEditable.linkedIn
                  ? "rgba(108,99,255,0.2)"
                  : "rgba(139,109,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "absolute",
                top: 12,
                right: 12,
                transition: "0.3s",
              }}
              title={
                isEditable.linkedIn ? "Lock LinkedIn" : "Edit LinkedIn URL"
              }
            >
              <BiPencil size={16} color="#8b6dff" />
            </div>

            <h6
              style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#333",
                marginBottom: "6px",
              }}
            >
              LinkedIn
            </h6>
            <Form.Label
              style={{
                fontWeight: 400,
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "6px",
              }}
            >
              Profile URL
            </Form.Label>
            <Form.Control
              name="linkedIn"
              placeholder="linkedin.com/in/mrbean"
              value={data.linkedIn}
              onChange={handleLinkedInChange}
              disabled={!isEditable.linkedIn}
              style={{
                background: "#fff",
                height: "42px",
                borderColor: "#ddd",
              }}
            />
          </Card>
        </Col>

        {/* Resume */}
        <Col md={6}>
          <Card
            className="p-3 border-0 shadow-sm h-100"
            style={{
              background: "rgba(249,249,253,0.9)",
              borderRadius: 14,
              position: "relative",
            }}
          >
            <div
              onClick={() => toggleEdit("resume")}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: isEditable.resume
                  ? "rgba(108,99,255,0.2)"
                  : "rgba(139,109,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "absolute",
                top: 12,
                right: 12,
                transition: "0.3s",
              }}
              title={isEditable.resume ? "Lock Resume" : "Edit Resume"}
            >
              <BiPencil size={16} color="#8b6dff" />
            </div>

            <h6
              style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Resume
            </h6>
            <div className="d-flex align-items-center justify-content-between">
              {isEditable.resume ? (
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleResumeChange}
                  style={{
                    background: "#fff",
                    borderColor: "#ddd",
                    height: "42px",
                    width: "80%",
                  }}
                />
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <HiOutlineDocumentText size={20} color="#6C63FF" />
                  <span style={{ color: "#555", fontWeight: 500 }}>
                    {data.resumeFileName}
                  </span>
                </div>
              )}

              <Button
                variant="link"
                style={{
                  textDecoration: "none",
                  color: "#6C63FF",
                  fontWeight: 500,
                }}
              >
                View
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ExperienceForm;