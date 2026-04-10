import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { openOutline } from "ionicons/icons";
import LoadingSpinner from "../components/LoadingSpinner";
import resumeConfig from "../config/resumeConfig";
import "../assets/css/resume.css";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="resume-box">
        <div className="resume-toolbar">
          <a
            href={resumeConfig.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-redirect-btn"
          >
            <span className="resume-redirect-btn__icon-wrap" aria-hidden="true">
              <IonIcon icon={openOutline} />
            </span>
            <span className="resume-redirect-btn__label">Open in Google Drive</span>
          </a>
        </div>

        {loading && <LoadingSpinner />}

        <figure style={{ display: loading ? "none" : "block", margin: 0 }}>
          <div className="resume-frame-wrap">
            <PdfLoader handleLoad={handleLoad} url={resumeConfig.url} />
          </div>
        </figure>
      </section>
    </article>
  );
};

const PdfLoader = ({ handleLoad, url }) => {
  return (
    <iframe
      src={url}
      width="100%"
      height="600"
      title="Resume PDF"
      onLoad={handleLoad}
    />
  );
};

export default Resume;
