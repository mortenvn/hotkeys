import { h } from 'preact';
import styled from 'styled-components';

import SiteWrapper from '../components/SiteWrapper';
import Logo from '../images/logo.svg';

const Nav = styled.nav`
  background-color: white;
  border-top: 2px solid hsl(344, 97%, 55%);
  box-shadow: 0 2px 6px hsla(0, 0%, 0%, 0.08);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  & img {
    width: 100%;
    max-height: 100%;
  }
`;

const Header = styled.h1`
  font-weight: 400;
`;

const Search = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 0;
  background-color: whitesmoke;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  margin-left: 20px;
  flex-grow: 1;

  &:focus {
    outline: none;
    border-color: #66c7f4;
  }

  &::placeholder {
    color: #999;
  }
`;

export default () => (
  <Nav>
    <SiteWrapper>
      <Content>
        <LogoWrapper>
          <img src={Logo} alt="" />
        </LogoWrapper>
        <Header>Hotkeys</Header>
        <Search type="text" placeholder="Search for hotkeys or applications" />
      </Content>
    </SiteWrapper>
  </Nav>
);
