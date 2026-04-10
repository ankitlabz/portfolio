import React, { useState } from "react";
import certificatesConfig from "../config/certificatesConfig";
import { IonIcon } from "@ionic/react";
import { documentTextOutline, eyeOutline } from "ionicons/icons";
import "../assets/css/portfolio.css";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [...certificatesConfig.categories];
  const certificates = [...certificatesConfig.certificates];
  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

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
        <CertificateList items={filtered} />
      </section>
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

const CertificateCard = ({ cert }) => {
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
          alt={cert.title}
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

  if (cert.link) {
    return (
      <a href={cert.link} target="_blank" rel="noreferrer">
        {figure}
        {text}
      </a>
    );
  }

  return (
    <div className="certificate-card-static">
      {figure}
      {text}
    </div>
  );
};

const CertificateList = ({ items }) => (
  <ul className="project-list">
    {items.map((cert, index) => (
      <li
        key={`cert-${index}`}
        className="project-item active"
        data-filter-item
        data-category={cert.category}
      >
        <CertificateCard cert={cert} />
      </li>
    ))}
  </ul>
);

export default Certificates;
