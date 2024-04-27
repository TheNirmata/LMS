import Image from "next/image";
import styles from "./page.module.css";
import SignInPage from './(auth)/sign-in/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <SignInPage />
      </div>
    </main>
  );
} 