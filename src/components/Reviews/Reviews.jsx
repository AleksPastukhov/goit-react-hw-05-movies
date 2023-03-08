import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/theMovieDbApi';
import { Title, Desc } from './Reviews.styled';

export function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId, 'reviews')
      .then(data => setReviewsData(data.results))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <ul>
      {reviewsData.map(review => (
        <li key={review.id}>
          <Title>Author: {review.author}</Title>
          <Desc>{review.content}</Desc>
        </li>
      ))}
    </ul>
  );
}
