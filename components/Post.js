import Link from 'next/link'
import DateFormatter from './DateFormatter'
import styles from '../styles/Site.module.css'

export default function Post({ title, date, tag, slug }) {
  return (
    <div className={styles.post}>
      <h3><Link as={`/posts/${slug}`} href="/posts/[slug]"><a>{title}</a></Link> &mdash; <DateFormatter dateString={date} /></h3>
    </div>
  )
}
