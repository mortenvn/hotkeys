import { h } from 'preact';
import styled from 'styled-components';

import { OR, PLUS, CURSOR, CURSOR_DRAG } from '../constants';
import Key from '../components/Key';
import Cursor from '../components/Cursor';

const Plus = styled.span`
  margin: 0 10px 0 10px;
  font-weight: 700;
`;

const Or = styled.span`
  margin: 0 10px 0 10px;
  color: hsla(0, 0%, 0%, 0.3);
`;

const getStyle = keyword => {
  switch (keyword) {
    case PLUS:
      return <Plus>+</Plus>;
    case OR:
      return <Or>or</Or>;
    case CURSOR:
      return <Cursor />;
    case CURSOR_DRAG:
      return <Cursor type={CURSOR_DRAG} />;
    default:
      return <Key>{keyword}</Key>;
  }
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default props => {
  const combinations = props.combination.map(k => getStyle(k));
  return <Wrapper>{combinations}</Wrapper>;
};
