import styles from './PageTitle.module.css';

export function PageTitle() {
  return (
    <div className={styles.pageTitleContainer}>
      <div className="container">
        <div className="text-center">
          <div className={styles.decorativeIcon}>
            <i className="bi bi-cloud-sun"></i>
          </div>
          <h1 className={`${styles.title} display-4 fw-bold`}>
            Weather Based Outfit Suggestion Generator
          </h1>
          <hr className={styles.divider} />
          <p className={styles.subtitle}>
            Removing decision anxiety for busy parents - smart outfit
            suggestions based on real weather
          </p>
        </div>
      </div>
    </div>
  );
}
