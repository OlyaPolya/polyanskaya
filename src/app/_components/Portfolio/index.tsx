import styles from "./index.module.scss";
import { useContext } from 'react';
import { AppContext } from '@/app/_context/appContext';
import commonStyle from '../../common.module.scss';
import Project from './Project';


export default function Portfolio() {
  const { portfolio } = useContext(AppContext);
  const { title, stack } = portfolio;

  return (
    <section>
      <h3 className={commonStyle.title}>{title}</h3>
      <div className={styles.portfolio__list}>
        {stack.map((item, index) => { return (
          <Project project={item} key={item.title} photoSide={(index % 2) === 0 ? 'left' : 'right'}/>
        )})}
      </div>
    </section>
  );
}
