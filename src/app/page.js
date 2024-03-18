import styles from "./page.module.css";
import Grid from "@/components/grid";
import Description from "../components/description";

export default function Home() {
  return (
  <main className={styles.main}>
    <head>
      <title>Acá Entre Nos</title>
      <meta property="og:title" content="Homepage de Acá Entre Nos" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://decaldas.github.io/hereBetweenUs/" />
      <meta property="og:image" content="./opengraph-image.png" />
    </head>
    <Description />
    <Grid />

  </main>
  );
}
