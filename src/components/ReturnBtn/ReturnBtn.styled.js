import styled from 'styled-components';

export const ReturnBtn = styled.button`
  min-width: 80px;
  min-height: 30px;
  padding: 4px;
  font-weight: 600;
  font-size: 16px;
  background-color: purple;
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  color: white;
  border: 2px solid purple;
  border-radius: 4px;
  margin-top: 100px;
  transition: all 250ms;
  :hover {
    transform: scale(1.1);
    color: yellow;
  }
  :hover {
    opacity: 0.8;
  }
`;
