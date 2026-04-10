/**
 * Resume page embeds a PDF in an iframe.
 *
 * Default: `public/resume.pdf` — works for everyone (no Google sign-in). Replace that
 * file and redeploy when your CV changes.
 *
 * Optional: to embed from Google Drive instead, the Drive file MUST be shared as
 * “Anyone with the link” → “Viewer”. Otherwise visitors see “Sign in to Google”.
 * Then set in `.env`:
 *   REACT_APP_RESUME_EMBED_URL=https://drive.google.com/file/d/YOUR_FILE_ID/preview
 */
const resumeConfig = {
  url:
    process.env.REACT_APP_RESUME_EMBED_URL ||
    `${process.env.PUBLIC_URL}/resume.pdf`,
};

export default resumeConfig;
