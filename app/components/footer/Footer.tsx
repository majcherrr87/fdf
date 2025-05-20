import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        © {new Date().getFullYear()} Fabryka Dobrej Formy. All rights reserved.
      </div>
    </footer>
  );
};
