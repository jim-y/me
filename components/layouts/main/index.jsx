import Footer from "../../footer";
import Nav from "../../nav";
import styles from "./main.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
