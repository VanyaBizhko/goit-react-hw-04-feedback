import PropTypes from 'prop-types'
import styles from './Feddback.module.css'
export default function Feddback({ options, feddbackBtns }) {
    return (
      
    options.map(el => (
      <ul className={styles.button_list} key={el}>
        <button className={styles.buttons} type="button" onClick={() => feddbackBtns(el)}>{el}</button>
      </ul>
    ))
  );
}
Feddback.propType = {
  options: PropTypes.array,
  feddbackBtns: PropTypes.button
}