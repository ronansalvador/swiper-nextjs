import styles from './page.module.css'
import Carousel from './components/carousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
    </main>
  )
}
