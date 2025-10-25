
const defaultEducationEntry = {
    college: 'e.g. Lincoln College', 
    course: 'e.g. Computer science engineering', 
    degree: 'e.g. Bachelors in Technology', 
    year: 'YYYY', 
    grade: ''
};

const defaultExperienceEntry = {
    domain: 'e.g. Technology', 
    subDomain: 'e.g. MERN Stack', 
    experience: '' 
};

export const initialUsers = [
    {
        id: 1,
        firstName: "Dave",
        lastName: "Richards",
        email: "dave@mail.com",
        phone: "+91 8332883854",
        gender: "Male",
        yearOfBirth: "1995",
        address: "123 Main Street, Pune",
        pincode: "411001",
        domicileState: "Maharashtra",
        domicileCountry: "India",

        
        education: [
            {
                college: "MIT College of Engineering",
                course: "Computer Engineering",
                degree: "Bachelors in Technology",
                year: "2017",
                grade: "A",
            },
        ],
        
       
        skills: ["React", "Bootstrap", "JavaScript", "Redux"],
        projects: ["Campus Portal Project", "E-commerce Checkout"],
        
   
        workExperience: [
            { domain: "IT Services", subDomain: "MERN Stack", experience: "2 years" },
        ],
        
   
        linkedinUrl: "linkedin.com/in/daverichards",
        resumeUrl: "myresume.pdf",
    },
    { id: 2, firstName: "Abhishek", lastName: "Hari", email: "hari@mail.com", phone: "9876543210", education: [], skills: [], projects: [], workExperience: [], linkedinUrl: '', resumeUrl: '' },
    { id: 3, firstName: "Nishita", lastName: "Gupta", email: "nishita@mail.com", phone: "9988776655", education: [], skills: [], projects: [], workExperience: [], linkedinUrl: '', resumeUrl: '' },
];

export const getNextId = (users) => {
    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    return maxId + 1;
};

export { defaultEducationEntry, defaultExperienceEntry };