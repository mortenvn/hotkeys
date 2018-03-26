import { h } from 'preact';
import styled from 'styled-components';

import { CURSOR, CURSOR_DRAG } from '../constants';
import CursorSVG from '../images/cursor.svg';
import CursorDragSVG from '../images/cursor-drag.svg';

const CursorImg = styled.img`
  height: 20px;
`;

const getCursorType = type => {
  switch (type) {
    case CURSOR_DRAG:
      return CursorDragSVG;
    case CURSOR:
      return CursorSVG;
    default:
      return CursorSVG;
  }
};

export default props => <CursorImg src={getCursorType(props.type)} alt="" />;
