'use client';
import { useContext } from 'react';
import styles from "./index.module.scss";
import { AppContext } from '../../_context/appContext';
import Link from 'next/link';

export default function Header() {
  const { pages }  = useContext(AppContext);

  const links = Object.keys(pages).map( section => {
    return (
      <li key={pages[section].title}  className={styles['dropdown__link']}>
        <Link  href={pages[section].path} >
        {pages[section].title}
      </Link>
      </li>
    )
  })

  return (
    <header className={styles.header}>
      <div  className={styles.dropdown}>

        <button className={styles['dropdown__button']}>
          <img src="./img/icons/arrow_top_black.svg" alt="Arrow down icon" className={styles['dropdown__icon']}/>
        </button>

        <nav className={styles['dropdown__menu']}>
          <ul className={styles['dropdown__list']}>
            {links}
          </ul>
        </nav>
      </div>

    </header>
  );
}
