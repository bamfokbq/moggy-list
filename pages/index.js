import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
    <Head>
     <title>Moggy | Home</title>
    </Head>
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tempore
        pariatur accusamus, voluptatibus suscipit maxime modi obcaecati minus
        molestiae nemo reprehenderit error ut, sed ex non alias repellendus
        debitis eveniet. Pariatur facilis vitae harum, obcaecati ipsum voluptate
        impedit omnis ea?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tempore
        pariatur accusamus, voluptatibus suscipit maxime modi obcaecati minus
        molestiae nemo reprehenderit error ut, sed ex non alias repellendus
        debitis eveniet. Pariatur facilis vitae harum, obcaecati ipsum voluptate
        impedit omnis ea?
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See ninjas listing</a>
      </Link>
    </div>
  );
}
