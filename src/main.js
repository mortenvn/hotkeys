import { h, render } from 'preact';
import { Router } from 'preact-router';
import { injectGlobal } from 'styled-components';

import Home from './pages/Home';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Proxima Nova", sans-serif;
    background: hsl(199, 10%, 94%);
    color: #292929;
    cursor: default;
  }
`;

const Main = () => (
  <Router>
    <Home path="/" />
  </Router>
);

render(<Main />, document.body);
