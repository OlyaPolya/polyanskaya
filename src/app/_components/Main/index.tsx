import styles from "./index.module.scss";
import { AppContext } from '@/app/_context/appContext';
import { useContext } from 'react';

export default function Main() {
  const { skills } = useContext(AppContext);
  const { description } = skills;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}><span>Оля</span> Полянская</h1>
      <p className={styles.subtitle}>
          <span className={`${styles['subtitle--bold']}`}>front</span>
          <span className={`${styles['subtitle--frame']}`}>end</span>
          <span className={`${styles['subtitle--italic']}`}>developer</span>
      </p>

      <ul className={styles.list}>
        { description.map((item, index) => <li key={index} className={styles.item}>{item}</li>) }
      </ul>
      <div className={styles.image}>
        <img src="/img/david.png" alt="David image"/>
      </div>
    </main>
  );
}
