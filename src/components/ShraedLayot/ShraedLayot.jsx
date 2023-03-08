import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavItem, Wrapper, Nav, List } from './ShraedLayout.styled';

export const ShraedLayout = () => {
  return (
    <Wrapper>
      <Nav>
        <List>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/movies">Movies</NavItem>
          </li>
        </List>
      </Nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
