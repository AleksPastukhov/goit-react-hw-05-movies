import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FilmTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 5px;
  font-size: 16px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0 0 20px 0;
`;

export const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;
  transition: transform ${p => p.theme.transition},
    box-shadow ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.04);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
`;

export const FilmCard = styled.div`
  width: 250px;
  height: 440px;
  background-color: ${p => p.theme.colors.backgroundColor};

  img {
    width: 250px;
    height: 375px;
  }
`;
