import styles from '../styles/components/Button.module.css';

interface ButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles.primary}>{props.children}</button>
  )
}