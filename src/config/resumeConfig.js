/**
 * Default: Google Drive PDF embed (`/preview`). Keep the file shared as
 * “Anyone with the link” → Viewer. Replace the PDF in Drive to update what visitors see.
 *
 * Optional: REACT_APP_RESUME_EMBED_URL in .env / CI (e.g. a different embed URL).
 */
const RESUME_DRIVE_FILE_ID = "1dOhczOX2uWgB2IpnFJz7OexYkRq2lTqv";

const resumeConfig = {
  url:
    process.env.REACT_APP_RESUME_EMBED_URL ||
    `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`,
};

export default resumeConfig;
