'use client';
import { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import styles from '../styles/ReviewForm.module.css';

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [praise, setPraise] = useState('');
  const [error, setError] = useState(null);

  const handleSafetyRating = (rating) => setSafetyRating(rating);
  const handleCommunicationRating = (rating) => setCommunicationRating(rating);
  const handleRecommend = (recommendation) => setRecommend(recommendation);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error

    // Client-side validation
    if (safetyRating === 0 || communicationRating === 0 || recommend === null || praise.trim() === '') {
      setError('All fields are required.');
      return;
    }

    const review = { safetyRating, communicationRating, recommend, praise };
    console.log(review);

    try {
      const response = await axios.post('/api/reviews', review);

      if (response.status !== 201) {
        throw new Error(response.data.message || 'Failed to submit review.');
      }

      alert('Review submitted! Thank you for your feedback.');
      setSafetyRating(0);
      setCommunicationRating(0);
      setRecommend(null);
      setPraise('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.ratingSection}>
          <h2>Safety Rating</h2>
          <StarRating rating={safetyRating} onRating={handleSafetyRating} />
        </div>
        <div className={styles.ratingSection}>
          <h2>Communication Rating</h2>
          <StarRating rating={communicationRating} onRating={handleCommunicationRating} />
        </div>
        <div className={styles.recommendSection}>
          <h2>Would you recommend Trausti?</h2>
          <button
            type="button"
            onClick={() => handleRecommend(true)}
            className={`${styles.recommendButton} ${recommend === true ? styles.selected : ''}`}
          >
            👍
          </button>
          <button
            type="button"
            onClick={() => handleRecommend(false)}
            className={`${styles.recommendButton} ${recommend === false ? styles.selected : ''}`}
          >
            👎
          </button>
        </div>
        <div className={styles.praiseSection}>
          <h2>Praise</h2>
          <textarea
            value={praise}
            onChange={(e) => setPraise(e.target.value)}
            rows="4"
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit Review</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ReviewForm;
