/**
 * Embedded resume uses Google Drive’s /preview URL. Keep a single PDF in that Drive
 * file and replace the file contents there — the site will always show the latest
 * version after a refresh (no redeploy). Replace FILE_ID if you move the resume
 * to another Drive file.
 */
const RESUME_DRIVE_FILE_ID = "19s5sacmgzIVwyz7mxxReDKyGomasgBbP";

const resumeConfig = {
  url: `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`,
};

export default resumeConfig;
