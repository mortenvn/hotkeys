import { h } from 'preact';
import styled from 'styled-components';

import Logo from '../images/logo.svg';
import AppleSVG from '../images/apple.svg';
import VSCodeImage from '../images/vscode.png';
import CursorSVG from '../images/cursor.svg';
import CursorDragSVG from '../images/cursor-drag.svg';

const Key = styled.kbd`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px 9px;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  font-family: 'Source Sans Pro', monospace;

  &:not(:last-child) {
    margin-right: 2px;
  }
`;

const Home = () => (
  <div>
    <nav>
      <div class="wrapper nav-wrapper">
        <div class="brand">
          <img src={Logo} alt="" />
        </div>
        <h1>Hotkeys</h1>
        <input
          type="text"
          class="search"
          placeholder="Search for hotkeys or applications"
        />
      </div>
    </nav>
    <div class="wrapper">
      <div class="group">
        <div class="header">
          <div class="logo-wrapper">
            <img
              src={AppleSVG}
              alt=""
              class="logo"
              style={{ position: 'relative', top: '-3px' }}
            />
          </div>
          <h2>macOS</h2>
        </div>
        <div class="hotkeys">
          <div class="hotkey">
            <h3>Move to start of line</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>←</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Move to end of line</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>→</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Select from caret to start</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>←</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Select from caret to end</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>→</Key>
            </div>
          </div>
        </div>
      </div>

      <div class="group">
        <div class="header">
          <div class="logo-wrapper">
            <img src={VSCodeImage} alt="" class="logo" />
          </div>
          <h2>Visual Studio Code</h2>
        </div>

        <div class="hotkeys">
          <div class="category">Move & Copy</div>

          <div class="hotkey">
            <h3>Move line up </h3>
            <div class="shortcut">
              <Key>⌥</Key>
              <Key>↑</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Move line down</h3>
            <div class="shortcut">
              <Key>⌥</Key>
              <Key>↓</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Duplicate line up</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌥</Key>
              <Key>↑</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Duplicate line down</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌥</Key>
              <Key>↓</Key>
            </div>
          </div>

          <div class="category">Selection</div>

          <div class="hotkey">
            <h3>Find next of selection</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>D</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Skip next of selection</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>K</Key>
              <span class="plus">+</span>
              <Key>⌘</Key>
              <Key>D</Key>
            </div>
          </div>

          <div class="hotkey">
            <div class="text">
              <h3>Select content inside HTML tag</h3>
              <p>
                Press
                <Key>→</Key> to expand the selection. Press
                <Key>←</Key> to shrink the selection.
              </p>
            </div>

            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌃</Key>
              <Key>⌘</Key>
              <Key>→</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Column selection</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌥</Key>
              <span class="plus">+</span>
              <img src={CursorDragSVG} alt="" class="cursor" />
            </div>
          </div>

          <div class="hotkey">
            <h3>Undo cursor position</h3>
            <div class="shortcut">
              <Key>⌘</Key>
            </div>
          </div>

          <div class="hotkey">
            <div class="text">
              <h3>Open or create file</h3>
              <p>Click on a file path to open it</p>
            </div>
            <div class="shortcut">
              <Key>⌘</Key>
              <span class="plus">+</span>
              <img src={CursorSVG} alt="" class="cursor" />
            </div>
          </div>

          <div class="category">Search</div>

          <div class="hotkey">
            <h3>Find</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>F</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Select all occurrences of Find match</h3>
            <div class="shortcut">
              <Key>⌥</Key>
              <Key>Enter</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Find next</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>G</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Find previous</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>G</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Find all</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>F</Key>
            </div>
          </div>

          <div class="category">Panes</div>

          <div class="hotkey">
            <h3>New pane</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>\</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Go to pane</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>1</Key>
              <span class="or">or</span>
              <Key>⌘</Key>
              <Key>2</Key>
              <span class="or">or</span>
              <Key>⌘</Key>
              <Key>3</Key>
            </div>
          </div>

          <div class="category">Interface</div>

          <div class="hotkey">
            <h3>Toggle sidebar</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>B</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Toggle error</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>M</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>File Explorer</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>E</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Debugger</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>D</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Extensions</h3>
            <div class="shortcut">
              <Key>⇧</Key>
              <Key>⌘</Key>
              <Key>X</Key>
            </div>
          </div>

          <div class="category">Misc.</div>

          <div class="hotkey">
            <h3>Rename symbol</h3>
            <div class="shortcut">
              <Key>F2</Key>
            </div>
          </div>

          <div class="hotkey">
            <h3>Select current line</h3>
            <div class="shortcut">
              <Key>⌘</Key>
              <Key>I</Key>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
