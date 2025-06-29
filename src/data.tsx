// MUI: Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Data object that contains all of the data for the template.
const data = {
  name: "Roberto Haruo Honda Junior",
  avatar: "me.jpeg",
  contacts: [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "roberto_junior_honda@hotmail.com",
    },
    {
      icon: <HomeIcon />,
      label: "Address",
      value: "Japan Shizuoka-ken Hamamatsu-shi",
    },
  ],
  skills: [
    {
      category: "Programming Languages:",
      skills: "TypeScript, JavaScript, Python, Java, Dart, C, C++",
    },
    {
      category: "Frameworks/Libraries:",
      skills:
        "Git, Docker, React, Redux, Material-UI, Bootstrap, JestJS, Next.js, NestJS, Express.js, MongoDB, PostgreSQL, MySQL, Sequelize, Prisma.io, Auth0, Flutter",
    },
    {
      category: "Language",
      skills:
        "Portuguese, English, Japanese",
    },
  ],
  socialMedia: [
    {
      icon: <LinkedInIcon sx={{ color: "#0a66c2" }} />,
      url: "https://www.linkedin.com/in/roberto-honda-50b272132",
    },
    {
      icon: <GitHubIcon sx={{ color: "black" }} />,
      url: "https://github.com/robertohonda",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Engineering",
      date: "2015 - 2018",
      school: "Federal University of Grande Dourados - Dourados, MS, Brazil",
      gpa: "Student Achievement for Achieving the Best Academic Performance Index",
    },
  ],
  experience: [
    {
      title: "Full Stack Web Developer / IDEABOX IT株式会社",
      date: "Sep 2024 - Current",
      description:
        "Maintain and improve web projects using React, Material-UI, Bootstrap, Python, ensuring code quality, UI consistency, and performance optimization.",
    },
    {
      title: "Full Stack Developer / Lambda LOGOS株式会社",
      date: "Jan 2023 - Jul 2024",
      description:
        "Maintained and enhanced web and mobile applications using React, Material-UI, Java, Spring Boot, MySQL, Auth0, Python, Dart, and Flutter. Worked on authentication systems, mobile apps, and internal tools.",
    },
    {
      title: "Freelance Developer",
      date: "Nov 2019 - Dev 2022",
      description:
        "Worked as a freelancer developing an online store for Brazilian products, including a management system for product listings, user accounts, and order tracking. Used React, Redux, Redux-Saga, Material-UI, Node.js, Express, and MongoDB.",
    },
    {
      title: "Full Stack Developer / e-Deploy",
      date: "Jan 2019 - Oct 2019",
      description:
        "Maintained existing systems and contributed to the development of a platform for creating promotional posts for cosmetic products. Using React, Material-UI, Redux, Node.js, MongoDB, PostgreSQL, Sequelize, Mongoose, Docker, and Nginx.",
    },
    {
      title: "Full Stack Developer Intern / e-Deploy",
      date: "Jun 2018 - Dec 2018",
      description:
        "Maintained systems, assisted other developers, and developed internal tools to support team workflows and improve efficiency.",
    },
  ],
};

// Exporting the data object so that the App.js file can import it.
export default data;
