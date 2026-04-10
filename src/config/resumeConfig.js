/**
 * Resume embed + download use the same Google Drive file id. Keep sharing
 * “Anyone with the link” → “Viewer”.
 *
 * Optional: REACT_APP_RESUME_EMBED_URL, REACT_APP_RESUME_DOWNLOAD_URL in .env / CI.
 */
const RESUME_DRIVE_FILE_ID = "19s5sacmgzIVwyz7mxxReDKyGomasgBbP";

const embedUrl =
  process.env.REACT_APP_RESUME_EMBED_URL ||
  `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`;

const downloadUrl =
  process.env.REACT_APP_RESUME_DOWNLOAD_URL ||
  `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;

const resumeConfig = {
  url: embedUrl,
  downloadUrl,
};

export default resumeConfig;
