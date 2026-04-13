const projectConfig = {

    projects: [
    {
      id: 1,
      image: 'gotokart.png',
      alt: 'GoToKart e-commerce platform',
      category: 'Full Stack & DevOps',
      date: '2025-06-01',
      title: 'GoToKart — E-Commerce Platform',
      text: 'Full-stack e-commerce (Spring Boot, MariaDB 10.11, JS) on AWS EC2: instance gotokart-ecommerce (i-0dcb2819d4c3539f5), t3.small in us-east-1, public 34.229.50.171, SSM Session Manager access, EventBridge 9 AM–9 PM IST, 20 GB EBS (~5.9 GB used). Docker Compose — Nginx :80, Spring Boot :8080, MariaDB :3306 on infra_gotokart-net; DB volume infra_mysql-data. GitHub Actions + SSM deploys.',
      link: 'http://34.229.50.171/',
    },
    {
      id: 2,
      image: 'gotokart-docs.png',
      alt: 'GoToKart documentation',
      category: 'Docs',
      date: '2025-06-01',
      title: 'GoToKart — Documentation',
      text: 'Official project documentation: architecture, API guides, infrastructure, deployment map, and commit activity — hosted on GitHub Pages.',
      link: 'https://gotokart.github.io/docs/',
    },
  ],
}

export default projectConfig;