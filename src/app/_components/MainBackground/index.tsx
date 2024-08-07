/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "./index.module.scss";

export default function MainBackground(): JSX.Element {;

  return (
    <div className={styles.background}>
        <img src='./img/olya_portfolio_sketch_BACK_no_dots_002.gif' alt='Backgroung Image' className={styles.background__image} style={{maskImage: `url('./img/BACKGROUND_DOTS_FINEST.png')`}}/>
    </div>

  );
}
