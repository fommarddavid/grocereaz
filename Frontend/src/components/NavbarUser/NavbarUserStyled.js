import styled from 'styled-components';
import theme, { lighten } from '../../styles/theme';

const NavbarUserStyled = styled.div`
  background-color: ${lighten(theme.secondaryColor, 0)};
  /*
  border-bottom: 1px solid ${theme.strongColor};
  border-top: 1px solid ${theme.strongColor};*/
  height: 2.5em;

  .nav-user-links {
    display: none;
  }
  &.user--connected {
    .temp-grocery-list-link {
      display: none;
    }
    .nav-user-links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      a {
      color: white;
      /*text-shadow: 1px 1px ${theme.strongColor};*/
      font-family: ${theme.titleFont};
      font-size: 1.3em;
      font-weight: bold;
      padding-top: .1em;
        :hover {
          color: ${theme.strongColor};
        }
      }
      .grocery-lists-link {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 650px) {
    &.user--connected {
      .nav-user-links {
        .grocery-lists-link {
          display: block;
        }
      }
    }
`;

export default NavbarUserStyled;
