/**
 * Resume is embedded from Google Drive (`/preview`). Keep the file shared as
 * “Anyone with the link” → “Viewer” so visitors are not asked to sign in.
 * When you replace the PDF in Drive (same file entry), the site shows the new
 * version after a normal page refresh — no redeploy.
 *
 * Override (optional): REACT_APP_RESUME_EMBED_URL in .env or CI secrets.
 */
const RESUME_DRIVE_FILE_ID = "19s5sacmgzIVwyz7mxxReDKyGomasgBbP";

const resumeConfig = {
  url:
    process.env.REACT_APP_RESUME_EMBED_URL ||
    `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`,
};

export default resumeConfig;
