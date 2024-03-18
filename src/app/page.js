import styles from "./page.module.css";
import Grid from "@/components/grid";
import Description from "../components/description";

export default function Home() {
  return (
  <main className={styles.main}>
    <Description />
    <Grid />

  </main>
  );
}
