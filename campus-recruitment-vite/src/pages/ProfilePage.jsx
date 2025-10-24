import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FiCopy } from "react-icons/fi";
import BasicDetailsForm from "../components/BasicDetailsForm";
import EducationSkillsForm from "../components/EducationSkillsForm";
import ExperienceForm from "../components/ExperienceForm";

const ProfilePage = ({ users, setUsers }) => {
  const { id } = useParams();
  const userId = parseInt(id);
  const initialData = users.find((u) => u.id === userId);
  const [profileData, setProfileData] = useState(initialData || {});
  const [activeTab, setActiveTab] = useState("basic");

  useEffect(() => {
    if (initialData) setProfileData(initialData);
  }, [users, userId, initialData]);

  const handleProfileUpdate = () => {
    const userIndex = users.findIndex((u) => u.id === profileData.id);
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = profileData;
      setUsers(updatedUsers);
    }
  };

  // 🟣 Avatar Component (hover-based, centered pencil)
  const AvatarIcon = () => {
    const [preview, setPreview] = useState(profileData.profileImage || null);
    const [hovered, setHovered] = useState(false);

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
        setProfileData((prev) => ({ ...prev, profileImage: imageUrl }));
      }
    };

    return (
      <div
        className="position-relative d-inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Profile Circle */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#a6a6a6",
            position: "relative",
            overflow: "hidden",
            border: "4px solid #fff",
            boxShadow: "0 0 15px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
          }}
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 0.3s ease",
                filter: hovered ? "brightness(70%)" : "brightness(100%)",
              }}
            />
          ) : (
            // Default placeholder (light purple)
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 14C8.13401 14 2 15.79 2 19V21H22V19C22 15.79 15.866 14 12 14Z"
                fill="#E6E0FF"
              />
            </svg>
          )}

          {/* ✏️ Pencil (visible only on hover) */}
          {hovered && (
            <label
              htmlFor="profile-upload"
              className="position-absolute d-flex align-items-center justify-content-center"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "25%",
                backgroundColor: "#E8E0FF",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "all 0.3s ease",
              }}
              title="Change profile picture"
            >
              {/* Modern outlined pencil icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.004 1.004 0 000-1.42l-2.34-2.34a1.004 1.004 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
                  fill="#6B4EFF"
                />
              </svg>
            </label>
          )}

          {/* Hidden File Input */}
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>
    );
  };

  // 🧩 Tabs + Forms Rendering
  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return <BasicDetailsForm data={profileData} setData={setProfileData} />;
      case "education":
        return (
          <EducationSkillsForm data={profileData} setData={setProfileData} />
        );
      case "experience":
        return <ExperienceForm data={profileData} setData={setProfileData} />;
      default:
        return null;
    }
  };

  return (
    <Container fluid className="py-4 px-5 bg-light min-vh-100">
      <Card
        className="shadow-sm mx-auto border-0"
        style={{
          maxWidth: "1200px",
          borderRadius: "20px",
          backgroundColor: "#fff",
        }}
      >
        {/* Header */}
        <Row className="align-items-center border-bottom px-4 py-4">
          <Col xs="auto">
            <AvatarIcon />
          </Col>
          <Col>
            <h4 className="mb-0 fw-semibold">
              {profileData.firstName || "Dave"}{" "}
              {profileData.lastName || "Richards"}
            </h4>
            <div className="d-flex align-items-center gap-2 mt-1">
              <span className="text-muted">{profileData.email}</span>
              {profileData.email && (
                <FiCopy
                  size={16}
                  onClick={() =>
                    navigator.clipboard.writeText(profileData.email)
                  }
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  title="Copy Email"
                />
              )}
            </div>
            <p className="text-muted small mb-0">
              {profileData.phone || "+91 8332883854"}
            </p>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-secondary"
              className="rounded-pill px-3"
              onClick={handleProfileUpdate}
            >
              Save Changes
            </Button>
          </Col>
        </Row>

        {/* Tabs */}
        <div
          className="d-flex justify-content-start gap-3 border-bottom px-4 pt-3 pb-2"
          style={{ background: "#fff" }}
        >
          {[
            { id: "basic", label: "Basic info" },
            { id: "education", label: "Education & skills" },
            { id: "experience", label: "Experience" },
          ].map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2 position-relative shadow-sm"
              style={{
                cursor: "pointer",
                background:
                  activeTab === tab.id ? "#E8E0FF" : "rgba(247,247,247,0.8)",
                color: activeTab === tab.id ? "#6B4EFF" : "#777",
                fontWeight: activeTab === tab.id ? 600 : 500,
                borderRadius: "10px",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}

              {/* Orange dot (always visible for Education) */}
              {tab.id === "education" && (
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                ></span>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-4 py-4">{renderTabContent()}</div>
      </Card>
    </Container>
  );
};

export default ProfilePage;