/**
 * Embedded preview + optional “open in Drive” use the same file id.
 * Optional: REACT_APP_RESUME_EMBED_URL, REACT_APP_RESUME_VIEW_URL in .env / CI.
 */
const RESUME_DRIVE_FILE_ID = "19s5sacmgzIVwyz7mxxReDKyGomasgBbP";

const embedUrl =
  process.env.REACT_APP_RESUME_EMBED_URL ||
  `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`;

const viewUrl =
  process.env.REACT_APP_RESUME_VIEW_URL ||
  `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/view`;

const resumeConfig = {
  url: embedUrl,
  viewUrl,
};

export default resumeConfig;
