import Container from 'components/container'
import Logo from './logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <div className={styles.flexContainer}>
      <header>
        <Container large>
          <Logo boxOn />
          <Nav />
        </Container>
      </header>
    </div>
  )
}