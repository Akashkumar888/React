
import styles from "./WelcomeMessage.module.css"

const WelcomeMessage = ({ todoItems }) => {
  if (todoItems.length === 0) {
    return <p className={styles.welcome} >Enjoy Your Day!</p>;
  }
};

export default WelcomeMessage;
