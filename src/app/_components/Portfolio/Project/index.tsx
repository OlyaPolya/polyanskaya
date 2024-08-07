import { ListItemProps, ProjectProps } from '@/app/_constants/types';
import styles from "./index.module.scss";

export default function Project({project, photoSide}: {project : ListItemProps, photoSide: 'left' | 'right'} ) {
  const { title, link, img, description, badges} = project

  return (
    <article key={title} className={styles.project} >
      <a href={link} className={`${styles.project__link} ${styles[`project__link--${photoSide}`]}`} target='_blank'>
        <img src={img} alt={`${title} logo`} className={styles.project__image} />
      </a>

      <div className={`${styles.project__body} ${styles[`project__body--${photoSide == "left" ? "right" : "left"}`]}`}>
        <h4 className={`${styles.project__title } ${styles[`project__title--${photoSide == "left" ? "right" : "left"}`]}`}>{title}</h4>
        { description && <p className={`${styles.project__description} ${styles[`project__description--${photoSide == "left" ? "right" : "left"}`]}`}>{description}</p> }
        {badges && <ul className={`${styles.project__badges} ${styles[`project__badges--${photoSide == "left" ? "right" : "left"}`]}`}>{badges.map((item, index) => <li key={index} className={styles.project__badge}>{item}</li>)}</ul>}
      </div>
    </article>
  );
}
