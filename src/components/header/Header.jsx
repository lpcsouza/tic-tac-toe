import styles from "./Header.module.css"
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header() {
  return (
    <div className={styles.header}>
      <Title>Tic-tac-toe</Title>

      <Subtitle>Criado por Luiz Paulo Souza</Subtitle>
    </div>
  )
}

export default Header
