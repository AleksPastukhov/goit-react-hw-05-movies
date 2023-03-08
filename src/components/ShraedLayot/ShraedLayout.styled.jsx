import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  padding: 4px;
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid ${p => p.theme.colors.primaryTextColor};
  border-radius: 5px;
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.accentСolor};
    border: 1px solid ${p => p.theme.colors.accentСolor};
  }
`;

export const Nav = styled.nav`
  font-size: 16px;
  box-shadow: ${p => p.theme.boxShadow};
  padding: 20px 20px;
  background-color: ${p => p.theme.colors.backgroundColor};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const Wrapper = styled.div`
  color: ${p => p.theme.colors.primaryTextColor};
`;
