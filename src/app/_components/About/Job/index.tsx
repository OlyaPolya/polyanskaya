import styles from "./index.module.scss";
import { AppContext } from '@/app/_context/appContext';
import { useContext } from 'react';
import commonStyle from '../../../common.module.scss';

export default function Jobs() {
  const { jobs } = useContext(AppContext);
  const { title, description } = jobs;

  return (
    <section>
      <h2 className={commonStyle.title }>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}


