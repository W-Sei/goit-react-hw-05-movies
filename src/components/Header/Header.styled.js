import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px 0;
  background: linear-gradient(90deg, purple, pink);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
  transform: scale(1);
  transition: transform 250ms;
  :hover {
    transform: scale(1.1);
  }
  :last-child {
    margin-right: 0;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: white;
  transition: opacity 250ms;
  text-decoration: none;
  &.active {
    color: yellow;
    border: 2px solid yellow;
    padding: 7px;
    border-radius: 3px;
  }
  :hover {
    opacity: 0.8;
  }
`;