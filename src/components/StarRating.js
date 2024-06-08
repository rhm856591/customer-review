'use client'
import { useState } from 'react';
import Star from './Star';
import styles from '../styles/ReviewForm.module.css';

const StarRating = ({ rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          starId={star}
          rating={hoverRating || rating}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
