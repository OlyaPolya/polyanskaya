import { ListItemProps } from '@/app/_constants/types';
import styles from "./index.module.scss";
import Image from 'next/image';
import { IMAGE_SIZE } from '../../../_constants/content';

export default function ListItem( {item} : {item: ListItemProps}) {
  const { title, img, link } = item;

  if (link) {
    return (
      <li key={title} className={`${styles['item--linked']}`} >
        <a href={link} target='_blank' className={styles.item__link}>
          <Image src={img} alt={`${title} logo`} className={styles.item__logo} height={IMAGE_SIZE.height} width={IMAGE_SIZE.width}/>
          <span className={styles.item__title}>{title}</span>
        </a>
    </li>
    )
  }

  return (
    <li key={title} className={styles.item}>
        <Image src={img} alt={`${title} logo`} className={styles.item__logo} height={IMAGE_SIZE.height} width={IMAGE_SIZE.width}/>
        <span className={styles.item__title}>{title}</span>
    </li>
  );
}
