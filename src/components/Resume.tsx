// React
import React, { ReactNode } from "react";

// MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Local
import ResumeCard from "./ResumeCard";

export interface ResumeProps {
  data: {
    name: string;
    avatar: string;
    contacts: {
      icon: ReactNode;
      label: string;
      value: string;
    }[];
    skills: {
      category: string;
      skills: string;
    }[];
    socialMedia: {
      icon: ReactNode;
      url: string;
    }[];
    education: {
      degree: string;
      date: string;
      school: string;
      gpa: string;
    }[];
    experience: {
      title: string;
      date: string;
      description: string;
    }[];
  };
}

// Resume: A React component that displays a resume/portfolio.
export default function Resume({ data }: ResumeProps) {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid container direction="column" size={{ xs: 12, md: 5, lg: 4 }}>
          {/* Profile */}
          <ResumeCard>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={data.name}
                src={data.avatar}
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                {data.name}
              </Typography>
            </Box>

            {/* Contact Details */}
            <Divider sx={{ mt: 2 }} />
            <List component="nav" dense>
              {data.contacts.map((contact, index) => (
                <ListItem key={index} >
                  <ListItemIcon>{contact.icon}</ListItemIcon>
                  <ListItemText
                    primary={contact.label}
                    secondary={contact.value}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mb: 2 }} />

            {/* Skills */}
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Skills
            </Typography>
            <List component="nav" dense>
              {data.skills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={skill.category}
                    secondary={skill.skills}
                  />
                </ListItem>
              ))}
            </List>
          </ResumeCard>

          {/* Social Media Links */}
          <ResumeCard sx={{ display: "initial", displayPrint: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Social Media
            </Typography>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              {data.socialMedia.map((media, index) => (
                <IconButton href={media.url} target="_blank" key={index}>
                  {media.icon}
                </IconButton>
              ))}
            </Box>
          </ResumeCard>
        </Grid>

        {/* Right Column */}
        <Grid container direction="column" size={{ xs: 12, md: 7, lg: 8 }}>
          {/* Education */}
          <ResumeCard>
            <Typography variant="h6" component="div">
              Education
            </Typography>
            <Box sx={{ mt: 2 }}>
              {data.education.map((education, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">
                      {education.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {education.date}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {education.school}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {education.gpa}
                    </Typography>
                  </Box>

                  {/* Divider but not for single or last item */}
                  {index !== data.education.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>

          {/* Work Experience */}
          <ResumeCard>
            <Typography variant="h6" component="div">
              Work Experience
            </Typography>
            <Box sx={{ mt: 2 }}>
              {data.experience.map((experience, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">
                      {experience.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {experience.date}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {experience.description}
                    </Typography>
                  </Box>

                  {/* Divider but not for single or last item */}
                  {index !== data.experience.length - 1 && (
                    <Divider sx={{ mb: 2 }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </ResumeCard>
        </Grid>
      </Grid>
    </Box>
  );
}
