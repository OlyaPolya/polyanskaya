'use client'
import Link from 'next/link';
import commonStyle from "./common.module.scss";

export default function Error() {

  return (
    <section className={commonStyle.error}>
     <h2>Ой! Что-то случилось</h2>
     <p>Айда на <Link href={"/"}>Главную</Link></p>
    </section>
  );
}
