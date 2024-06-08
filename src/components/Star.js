import styles from '../styles/ReviewForm.module.css';

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  const isFilled = starId <= rating;
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={isFilled ? styles.filledStar : styles.emptyStar}
    >
      ★
    </span>
  );
};

export default Star;
