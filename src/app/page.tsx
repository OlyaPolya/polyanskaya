'use client'
import styles from "./common.module.scss";
import MainBackground from './_components/MainBackground';
import Main from './_components/Main';
import About from './_components/About';
import Portfolio from './_components/Portfolio';
import Plug from './_components/Plug';
import Loader from './_components/Loader/index';

export default function Home() {

  return (
  <Plug fallback={<Loader/>}>
    <>
      <MainBackground/>
      <div className={`${styles.wrapper} ${styles.animation}`} >
        <Main/>
        <About/>
        <Portfolio/>
      </div>
    </>
  </Plug>
  );
}


