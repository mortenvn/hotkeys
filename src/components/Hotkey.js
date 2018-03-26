import { h } from 'preact';
import styled from 'styled-components';

import KeyCombo from '../components/KeyCombo';

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid whitesmoke;
  }

  &:hover {
    background: hsl(199, 20%, 98%);
  }
`;

const Header = styled.h3`
  font-weight: 400;
`;

const Description = styled.p`
  opacity: 0.7;
  margin-top: 5px;
  font-weight: 300;
`;

export default props => (
  <Wrapper>
    <div>
      <Header>{props.header}</Header>
      {!!props.description && <Description>{props.description}</Description>}
    </div>

    <KeyCombo combination={props.combination} />
  </Wrapper>
);
