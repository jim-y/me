import Head from "next/head";
import Layout from "../components/layouts/main";
import styles from "./index.module.css";

const heroContainer = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const left = {
  position: "relative",
  width: "370px",
  backgroundColor: "darkslateblue",
  borderRight: "2px solid white",
};

const middle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  color: "darkslateblue",
  bottom: "70px",
  left: "80px",
  height: "350px",
  width: "350px",
  backgroundColor: "white",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>A site by Attila Kling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <div style={heroContainer}>
            <div style={left}>
              <aside style={middle}>
                <div className={styles.aboutContainer}>
                  <h2 className={styles.mainText}>Attila Kling</h2>
                  <span>senior software engineer</span>
                  <span>team leader</span>
                  <span>@abbyy</span>
                </div>
              </aside>
            </div>
            <img
              src="/assets/images/screen-post-Ya3r7oApP4g-unsplash.jpg"
              alt="hero image"
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
