import React, { useState, useEffect, useCallback } from "react";
import certificatesConfig from "../config/certificatesConfig";
import { IonIcon } from "@ionic/react";
import {
  documentTextOutline,
  eyeOutline,
  chevronBackOutline,
} from "ionicons/icons";
import "../assets/css/portfolio.css";

function driveViewToPreview(url) {
  if (!url) return null;
  const m = url.match(/\/file\/d\/([^/]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : null;
}

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxCert, setLightboxCert] = useState(null);
  const closeLightbox = useCallback(() => setLightboxCert(null), []);
  const categories = [...certificatesConfig.categories];
  const certificates = [...certificatesConfig.certificates];
  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  useEffect(() => {
    if (!lightboxCert) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxCert]);

  return (
    <article className="portfolio certificates-page" data-page="certificates">
      <header>
        <h2 className="h2 article-title">Certificates</h2>
      </header>
      <section className="projects">
        <FilterList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CertificateList
          items={filtered}
          onOpenFullView={setLightboxCert}
        />
      </section>
      <CertificateLightbox cert={lightboxCert} onClose={closeLightbox} />
    </article>
  );
};

const FilterList = ({ categories, selectedCategory, setSelectedCategory }) => (
  <ul className="filter-list">
    {categories.map((category, index) => (
      <li key={`category-${index}`} className="filter-item">
        <button
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
          type="button"
          data-filter-btn
        >
          {category}
        </button>
      </li>
    ))}
  </ul>
);

const CertificateCard = ({ cert, onOpenFullView }) => {
  const figure = (
    <figure className="project-img">
      <div className="project-item-icon-box">
        <IonIcon icon={eyeOutline} />
      </div>
      {cert.useIcon ? (
        <div className="certificate-icon-placeholder" aria-hidden>
          <IonIcon icon={documentTextOutline} />
        </div>
      ) : (
        <img
          src={require(`../assets/images/certificates/${cert.image}`)}
          alt=""
          loading="lazy"
        />
      )}
    </figure>
  );

  const text = (
    <>
      <h3 className="project-title">{cert.title}</h3>
      <p className="project-category">{cert.detail}</p>
    </>
  );

  return (
    <button
      type="button"
      className="certificate-card-btn"
      onClick={() => onOpenFullView(cert)}
    >
      {figure}
      {text}
    </button>
  );
};

const CertificateList = ({ items, onOpenFullView }) => (
  <ul className="project-list">
    {items.map((cert, index) => (
      <li
        key={`cert-${index}`}
        className="project-item active"
        data-filter-item
        data-category={cert.category}
      >
        <CertificateCard cert={cert} onOpenFullView={onOpenFullView} />
      </li>
    ))}
  </ul>
);

const CertificateLightbox = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!cert) return null;

  const previewUrl = cert.image
    ? null
    : driveViewToPreview(cert.link);

  return (
    <div
      className="certificate-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-lightbox-title"
    >
      <button
        type="button"
        className="certificate-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close full view"
      />
      <div className="certificate-lightbox__panel">
        <div className="certificate-lightbox__header">
          <button
            type="button"
            className="certificate-lightbox__back"
            onClick={onClose}
          >
            <IonIcon icon={chevronBackOutline} />
            <span>Back</span>
          </button>
          <h2
            id="certificate-lightbox-title"
            className="certificate-lightbox__title"
          >
            {cert.title}
          </h2>
        </div>
        <div className="certificate-lightbox__body">
          {cert.image ? (
            <img
              src={require(`../assets/images/certificates/${cert.image}`)}
              alt={cert.title}
            />
          ) : previewUrl ? (
            <iframe title={cert.title} src={previewUrl} />
          ) : (
            <p className="certificate-lightbox__fallback">
              No preview available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
