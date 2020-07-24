import Head from "next/head";
import Layout from "../components/layouts/main";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>A site by Attila Kling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <div className={styles.heroContainer}>
            <div className={styles.canvas}>
              <aside className={styles.intro}>
                <div className={styles.aboutContainer}>
                  <h2>Attila Kling</h2>
                  <span>senior software engineer</span>
                  <span>team leader</span>
                  <a href="https://www.abbyy.com/" className={styles.company}>
                    @abbyy
                  </a>
                </div>
              </aside>
            </div>
            <img
              src="/assets/images/screen-post-Ya3r7oApP4g-unsplash.jpg"
              alt="hero image"
              className={styles.vis}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
