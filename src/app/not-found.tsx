'use client'
import commonStyle from "./common.module.scss";
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className={commonStyle.notFound}>
      <h2>Такой страницы не существует</h2>
      <p><Link href="/">Айда на Главную</Link></p>
    </section>
  )
}
