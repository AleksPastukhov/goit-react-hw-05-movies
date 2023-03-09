import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/theMovieDbApi';
import { Title, Desc } from './Reviews.styled';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId, 'reviews')
      .then(data => setReviewsData(data.results))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {!!reviewsData.length ? (
        <ul>
          {reviewsData.map(review => (
            <li key={review.id}>
              <Title>Author: {review.author}</Title>
              <Desc>{review.content}</Desc>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We donn`t any reviews for this movie.</h3>
      )}
    </>
  );
};

export default Reviews;
