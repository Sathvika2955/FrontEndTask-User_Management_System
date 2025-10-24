import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi';
import { FiCopy } from "react-icons/fi";

import BasicDetailsForm from '../components/BasicDetailsForm';
import EducationSkillsForm from '../components/EducationSkillsForm';
import ExperienceForm from '../components/ExperienceForm';

const ProfilePage = ({ users, setUsers }) => {
  const { id } = useParams();
  const userId = parseInt(id);

  const initialData = users.find((u) => u.id === userId);
  const [profileData, setProfileData] = useState(initialData || {});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('basic');

  useEffect(() => {
    if (initialData) {
      setProfileData(initialData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [users, userId, initialData]);

  const handleProfileUpdate = () => {
    if (!profileData.firstName || !profileData.email) {
      console.error('Please fill in required basic details.');
      return;
    }

    const userIndex = users.findIndex((u) => u.id === profileData.id);

    if (userIndex === -1) {
      console.error('Error: User not found in global list.');
      return;
    }

    const updatedUsers = [
      ...users.slice(0, userIndex),
      profileData,
      ...users.slice(userIndex + 1),
    ];

    setUsers(updatedUsers);
    console.log('Profile Updated Successfully!');
  };

  if (loading) {
    return (
      <Container fluid className="p-5 text-center">
        Loading profile...
      </Container>
    );
  }

  if (!profileData.id) {
    return (
      <Container fluid className="p-5 text-center">
        User not found.
      </Container>
    );
  }

  const AvatarIcon = () => {
    return (
      <div className="profile-avatar">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 14C8.13401 14 2 15.79 2 19V21H22V19C22 15.79 15.866 14 12 14Z"
            fill="#8C4FFF"
          />
        </svg>
      </div>
    );
  };

  // Helper for custom tab title with orange dot
  const tabLabel = (label, eventKey) => (
  <div style={{ position: "relative", display: "inline-block", paddingRight: 18 }}>
    {eventKey === "education" && (
      <span style={{
        position: "absolute",
        top: -5,
        right: -8,
        width: 12,
        height: 12,
        background: "#ff7d1a",
        borderRadius: "50%",
        zIndex: 1,
        boxShadow: "0 0 0 2px #fff"
      }} />
    )}
    <span>{label}</span>
  </div>
);


  return (
    <Container fluid className="py-4 px-5">
      <Card className="shadow-sm p-4">
        <Row className="mb-4 align-items-center border-bottom pb-3">

          <Col xs="auto" className="me-4">
            <AvatarIcon />
          </Col>

          <Col>
            <h3 className="mb-0">
              {profileData.firstName} {profileData.lastName}
            </h3>
            <div className="d-flex align-items-center gap-2">
              <span className="mb-0">{profileData.email}</span>
              {profileData.email && (
                <FiCopy
                  size={18}
                  className="copy-email-icon"
                  onClick={() => navigator.clipboard.writeText(profileData.email)}
                  title="Copy email"
                  style={{ cursor: 'pointer', opacity: 0.75 }}
                />
              )}
            </div>
            <p className="text-muted mb-0">{profileData.phone}</p>
          </Col>

          <Col xs="auto">
            <Button variant="outline-secondary" onClick={handleProfileUpdate}>
              Save Changes
            </Button>
          </Col>
        </Row>

        <Tabs
          id="profile-tabs"
          className="mb-4"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
        >
          <Tab
            eventKey="basic"
            title={tabLabel("Basic Info", "basic")}
          >
            <BasicDetailsForm data={profileData} setData={setProfileData} />
          </Tab>
          <Tab
            eventKey="education"
            title={tabLabel("Education & Skills", "education")}
          >
            <EducationSkillsForm data={profileData} setData={setProfileData} />
          </Tab>
          <Tab
            eventKey="experience"
            title={tabLabel("Experience", "experience")}
          >
            <ExperienceForm data={profileData} setData={setProfileData} />
          </Tab>
        </Tabs>
      </Card>
    </Container>
  );
};

export default ProfilePage;
