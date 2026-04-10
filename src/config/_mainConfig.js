import avatar from '../assets/images/my-avatar.png'
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoGithub, logoLinkedin } from 'ionicons/icons';

export const personalConfig = {
  avatar: avatar,
  name: `Ankit Pandey`,
  designation: `DevOps Engineer`,
};

export const contactConfig = [
  {
    title: 'Email',
    detail: `pandeyankit543210@gmail.com`,
    logo: mailOutline,
  }, 
  {
    title: 'Phone',
    detail: `+91 7754871070`,
    logo: phonePortraitOutline,
  }, 
  {
    title: 'Birthday',
    detail: `May 23, 2005`,
    logo: calendarOutline,
  }, 
  {
    title: 'Location',
    detail: `Noida, India`,
    logo: locationOutline,
  }, 
];

export const socialConfig = [
  {
    name: 'github',
    url: `https://github.com/ankitlabz`,
    logo: logoGithub,
  },
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/in/ankit-pandey3`,
    logo: logoLinkedin,
  },
];
