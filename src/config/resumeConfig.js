/**
 * In Google Drive the file may live under a folder like Resume/resume.pdf — sharing
 * still uses this file’s id in the URL (folder path is not part of the link).
 *
 * Preview: same-origin PDF in `public/resume.pdf` (no second Google pop-out in the corner).
 * Pop-out FAB: opens this file on Google Drive in a new tab.
 *
 * Optional: REACT_APP_RESUME_EMBED_URL, REACT_APP_RESUME_VIEW_URL in .env / CI.
 */
const RESUME_DRIVE_FILE_ID = "1dOhczOX2uWgB2IpnFJz7OexYkRq2lTqv";

const localEmbed = `${process.env.PUBLIC_URL}/resume.pdf`;

const embedUrl =
  process.env.REACT_APP_RESUME_EMBED_URL || localEmbed;

const viewUrl =
  process.env.REACT_APP_RESUME_VIEW_URL ||
  `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/view`;

const resumeConfig = {
  url: embedUrl,
  viewUrl,
};

export default resumeConfig;
