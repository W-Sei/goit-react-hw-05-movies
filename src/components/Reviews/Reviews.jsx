import PropTypes from 'prop-types';
import { ReviewsList, Item, Author, ReviewContent } from './Reviews.styled';

export function Reviews({ reviews }) {
  return (
    <>
      <ReviewsList>
        {reviews.map(({ author, review, id }) => (
          <Item key={id}>
            <Author>
              {author}: <ReviewContent>"{review}"</ReviewContent>
            </Author>
          </Item>
        ))}
      </ReviewsList>
    </>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      review: PropTypes.string,
    })
  ).isRequired,
};