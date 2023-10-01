import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css"


export const Header = () => {
  console.log(new Date());
  
  return (
    <header className={styles.header}> 
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
};