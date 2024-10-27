import styles from "./Header.module.css"
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from "../icon/Icon"

function Header() {
  return (
    <div className={styles.header}>
      <Title>Tic-tac-toe</Title>

      <Subtitle>Criado por Luiz Paulo Souza</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/lpcsouza" />
      </div>
    </div>
  )
}

export default Header
