import { ListItemProps } from '@/app/_constants/types';
import ListItem from '../ListItem';
import styles from "./index.module.scss";
import commonStyle from '../../../common.module.scss';

export default function List({title, list}: {title: string, list: Array<ListItemProps>}) {

  return (
    <section>
      <h2 className={commonStyle.title}>{title}</h2>
      <ul className={styles.list__block}>
        { list.map(item => { return (
          <ListItem item={item} key={item.title}/>
        )})}
      </ul>
    </section>
  );
}
