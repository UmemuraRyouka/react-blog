import styles from 'styles/blue-frame.module.css'
import Container from 'components/container'
import Link from 'next/link'

export default function BlueFrame({ children }){
  return(
    <div className={styles.frame}>
      {/* div,containerでマークアップ・青色のフレームを構成 */}
      <Container>{ children }</Container>

      {/* 記事一覧ページへのリンクボタン */}
      <Link href="/blog">
        <a className={styles.sideBtn}>Recent Blog Posts</a>
      </Link>
    </div>
  )
}