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
        {loading && <LoadingSpinner />}

        <figure
          className="resume-figure"
          style={{ display: loading ? "none" : "block" }}
        >
          <div className="resume-frame-wrap">
            <a
              href={resumeConfig.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-popout-fab"
              aria-label="Open resume in new tab"
              title="Open in new tab"
            >
              <IonIcon icon={openOutline} />
            </a>
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
      className="resume-iframe"
      src={url}
      width="100%"
      height="600"
      title="Resume PDF"
      onLoad={handleLoad}
    />
  );
};

export default Resume;
