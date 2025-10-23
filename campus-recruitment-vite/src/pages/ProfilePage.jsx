import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi';

// Import the sub-form components for each tab
import BasicDetailsForm from '../components/BasicDetailsForm';
import EducationSkillsForm from '../components/EducationSkillsForm';
import ExperienceForm from '../components/ExperienceForm';

const ProfilePage = ({ users, setUsers }) => {
    
    const { id } = useParams();
    const userId = parseInt(id);

    // Get the initial user data based on the ID from the URL
    const initialData = users.find(u => u.id === userId);

    // Local State: Manage the data being edited
    const [profileData, setProfileData] = useState(initialData || {});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (initialData) {
            setProfileData(initialData);
            setLoading(false);
        } else {
            // Handle case where user ID is invalid/not found
            setLoading(false); 
        }
    }, [users, userId, initialData]);

    // Function to update the global user list and local storage
    const handleProfileUpdate = () => {
        if (!profileData.firstName || !profileData.email) {
             console.error('Please fill in required basic details.');
             return;
        }

        // Find the index of the user to update
        const userIndex = users.findIndex(u => u.id === profileData.id);

        if (userIndex === -1) {
             console.error("Error: User not found in global list.");
             return;
        }

        // Create a new array with the updated user data
        const updatedUsers = [
            ...users.slice(0, userIndex),
            profileData,
            ...users.slice(userIndex + 1)
        ];
        
        setUsers(updatedUsers); // Update global state (triggers Local Storage save)
        console.log('Profile Updated Successfully!');
    };

    if (loading) {
        return <Container fluid className="p-5 text-center">Loading profile...</Container>;
    }
    
    if (!profileData.id) {
        return <Container fluid className="p-5 text-center">User not found.</Container>;
    }
    
    // Fallback for avatar source
    const getAvatarSource = () => {
        // Placeholder avatar circle
        return <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#E6E0F9"/>
            <path d="M50 40C56.63 40 62 34.63 62 28C62 21.37 56.63 16 50 16C43.37 16 38 21.37 38 28C38 34.63 43.37 40 50 40ZM50 44C38.96 44 30 52.96 30 64V70H70V64C70 52.96 61.04 44 50 44Z" fill="#8C8CFF"/>
        </svg>;
    }

    return (
        <Container fluid className="py-4 px-5">
            <Card className="shadow-sm p-4">
                <Row className="mb-4 align-items-center border-bottom pb-3">
                    <Col xs="auto" className="me-4">
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%'}}>
                            {getAvatarSource()}
                        </div>
                    </Col>
                    <Col>
                        <h3 className="mb-0">{profileData.firstName} {profileData.lastName}</h3>
                        <p className="mb-0">{profileData.email}</p>
                        <p className="text-muted mb-0">{profileData.phone}</p>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-secondary" onClick={handleProfileUpdate}>
                            Save Changes
                        </Button>
                    </Col>
                </Row>

                {/* Tab Navigation */}
                <Tabs defaultActiveKey="basic" id="profile-tabs" className="mb-4">
                    <Tab eventKey="basic" title="Basic Info">
                        <BasicDetailsForm data={profileData} setData={setProfileData} />
                    </Tab>

                    <Tab eventKey="education" title="Education & Skills">
                        <EducationSkillsForm data={profileData} setData={setProfileData} />
                    </Tab>
                    
                    <Tab eventKey="experience" title="Experience">
                        <ExperienceForm data={profileData} setData={setProfileData} />
                    </Tab>
                </Tabs>
            </Card>
        </Container>
    );
};

export default ProfilePage;