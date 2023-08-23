
import styles from './page.module.css'
import hero from '../../public/hero.png'
import Image from 'next/image'
import Button from '@/Components/button/Button'
export default function Home() {
  return (
    <div className={styles.container }>
      <div className={styles.item}>
           <h1 className={styles.title}>Better Design for your digital Products.</h1>
           <p className={styles.desc}>Turning your idea into Reality, We bring together the teams from the global tech industry.</p>
          <Button url="/portfolio" text="See our Works"/>
      </div>

      <div className={styles.item}>
      <Image src={hero} alt='heroImg' className={styles.img}/>
      </div>
      
    </div>
  )
}
