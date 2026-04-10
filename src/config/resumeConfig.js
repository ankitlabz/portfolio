/**
 * Embedded Google Drive PDF preview. Use the viewer’s own controls (pop-out / open in new window).
 * Optional: REACT_APP_RESUME_EMBED_URL in .env / CI.
 */
const RESUME_DRIVE_FILE_ID = "19s5sacmgzIVwyz7mxxReDKyGomasgBbP";

const resumeConfig = {
  url:
    process.env.REACT_APP_RESUME_EMBED_URL ||
    `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`,
};

export default resumeConfig;
