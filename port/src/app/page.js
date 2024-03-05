import ExperienceSection from "@/components/homepage/experience/Experience";
import Hero from "@/components/homepage/hero/Hero";
import TextLabel from "@/components/homepage/textLabel/TextLabel";
import SideProject from "@/components/shared/sideproject/SideProject";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <TextLabel />
      <ExperienceSection />
      <SideProject />
    </main>
  );
}
