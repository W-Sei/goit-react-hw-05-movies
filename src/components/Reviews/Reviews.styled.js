import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 40px 90px;
`;
export const Item = styled.li`
  border: transparent;
  border-radius: 0px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fadadd;
  padding: 40px;
  margin-bottom: 10px;
  transition: all 250ms;
  :hover {
    transform: scale(1.3);
    border: 1px solid purple;
    border-radius: 10px;
  }
`;
export const Author = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: purple;
  margin-right: 5px;
`;
export const ReviewContent = styled.span`
  color: black;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
`;

export const NoReviewText = styled.p`
  display: flex;
  justify-content: center;
  padding: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 25px;
`;
