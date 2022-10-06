import styles from 'styles/hero.module.css'
import Image from 'next/image'
// import cube from 'images/cube.jpg'

const cube = {
  src: 'https://images.microcms-assets.io/assets/90c4cb045c5944ac8b7a584dc66f2dc1/c0ceaedffad442329ab2645dd5fa563d/cube.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/jpeg;base64,',
}

export default function Hero({ title, subtitle, imageOn = false}){
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      { imageOn &&( 
      <figure className={styles.image}> 
        <Image src={cube} alt="" layout="responsive" sizez="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"/>
      </figure>
      )}
    </div>
  )
}