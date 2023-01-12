import "../styles/globals.css";
import styles from "../styles/imageGen.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <div className={styles.cover}>
        <div className={styles.footer}>
          <p>Contact: info@gilvon.com</p>
          <p>Copyright © 2023 Gilvon. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
