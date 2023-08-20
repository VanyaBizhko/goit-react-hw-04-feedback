import PropTypes from 'prop-types'
import styles from './Message.module.css'
export default function Message({ message }) {
     return <p className={styles.message}>{message}</p>;
}
Message.propTypes = {
     message: PropTypes.string,
}