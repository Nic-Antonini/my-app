import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Olá Mundo</h1>
      <h2>Hello World</h2>
      <h3>Hola Mundo</h3>

      <Link href={"/sobre"}>Sobre</Link>
    </main>
  )
}