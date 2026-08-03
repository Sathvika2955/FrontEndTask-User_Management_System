
# User Management Front-End

A modern React user profile management dashboard. Allows users to view, add, and edit details including experience, education, skills, resume, and LinkedIn—built using React, React-Bootstrap, and with attention to pixel-perfect Figma design.



## ✨ Features

- Responsive UI built with React-Bootstrap
- Profile summary: avatar, name, email, and phone
- Clickable copy icon beside email field
- Tab navigation: Basic Info, Education & Skills, Experience
- "Add Work Experience" button supports multiple rows
- Delete button for each experience entry
- Sub-domain input with **vertical ash-colored bar** left of label and field (matches Figma)
- LinkedIn and Resume in distinct card columns
- Edit (pencil) toggles for all core sections, with lock after edit
- All form controls and fields styled for clarity, consistency, and user-friendly input


## 🛠️ Usage

- Edit info by clicking pencil icons. Sections become editable/locked as toggled.
- Add more Work Experience rows with the plus button.
- Delete entries with the trash icon (appears if >1 row).
- Orange tab dot is always visible above "Education & Skills" for notification effect.
- Copy email using the click-to-copy icon.


## 🏗️ Structure

- `ProfilePage.js`: Profile avatar, summary, and tab navigation logic
- `BasicDetailsForm.js`: Basic info user form
- `EducationSkillsForm.js`: Education/skills add+edit, projects
- `ExperienceForm.js`: Work experiences, LinkedIn, Resume, all major custom UI tweaks


## 🎨 UI Details

- **Education & Skills** tab has a persistent orange dot (top-right)
- **Sub-domain** label/field always has a tall ash (#c0c0c0) vertical bar on the left
- Follows all Figma-provided spacing, alignment, and input behaviors


## 📦 Tech Stack

- React
- React-Bootstrap
- react-icons
- JavaScript (ES6+)
- Inline CSS + optional global CSS (no SCSS needed)



- ## Live Link
- https://frontendtask2955.netlify.app/


## 📄 License

For demonstration/educational use. Adapt for your organization as needed.



## 🤝 Credits

- UI/UX: Figma design provided by team
- Framework: [React](https://reactjs.org/), [React-Bootstrap](https://react-bootstrap.github.io/)
- Icons: [react-icons](https://react-icons.github.io/)




