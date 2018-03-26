import styled from 'styled-components';

export default styled.kbd`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px 9px;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  font-family: 'Source Sans Pro', monospace;
  ${props =>
    props.inline &&
    `
    font-size: 0.9em;
    padding: 1px 6px;
  `} &:not(:last-child) {
    margin-right: 2px;
  }
`;
