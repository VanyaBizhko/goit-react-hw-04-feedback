import PropTypes from 'prop-types'
import styles from './Section.module.css'
export default function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
}