import {
  HeaderWrapper,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styled';

export function Header() {
  return (
    <HeaderWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </HeaderWrapper>
  );
}
