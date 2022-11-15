import Image from 'next/image'
import styles from '../styles/components/Menu.module.css'

export function Menu() {
  return (
    <nav className={styles.container}>
      <Image src='/logo-white.svg' height={200} width={200}/>
      <div className={styles.menu}>
        <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Torneios</li>
            <li>Jogos</li>
            <li>Prêmios</li>
        </ul>
      </div>
    </nav>
  )
}