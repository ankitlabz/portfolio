/**
 * Embedded Google Drive PDF (`/preview`). Sharing: “Anyone with the link” → Viewer.
 *
 * Updating the resume:
 * - The site uses RESUME_DRIVE_FILE_ID, not the folder path. Same name in Resume/ is not enough
 *   if you created a *new* file — that new file has a new id; update RESUME_DRIVE_FILE_ID to match
 *   the file you want (open it in Drive → copy link → id is between /d/ and /view).
 * - Prefer: open the *existing* file → Manage versions → Upload new version (keeps the same id).
 *
 * If the preview still shows an old PDF after updating Drive: bump EMBED_CACHE_BUST and redeploy,
 * or hard-refresh / try incognito (iframes cache aggressively).
 *
 * Optional: REACT_APP_RESUME_EMBED_URL in .env / CI.
 */
const RESUME_DRIVE_FILE_ID = "1dOhczOX2uWgB2IpnFJz7OexYkRq2lTqv";

/** Set to "2", "3", … if you need to force browsers to reload the embed after a Drive update. */
const EMBED_CACHE_BUST = "";

const previewBase = `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`;
const defaultEmbedUrl =
  EMBED_CACHE_BUST === ""
    ? previewBase
    : `${previewBase}?v=${encodeURIComponent(EMBED_CACHE_BUST)}`;

const resumeConfig = {
  url: process.env.REACT_APP_RESUME_EMBED_URL || defaultEmbedUrl,
};

export default resumeConfig;
