import { h } from 'preact';
import styled from 'styled-components';

import Nav from '../components/Nav';
import SiteWrapper from '../components/SiteWrapper';
import Hotkey from '../components/Hotkey';
import Key from '../components/Key';
import { OR, PLUS, CURSOR, CURSOR_DRAG } from '../constants';

import AppleSVG from '../images/apple.svg';
import VSCodeImage from '../images/vscode.png';

const Application = styled.div`
  margin-bottom: 40px;
`;

const ApplicationHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  padding: 0 10px;
  margin-top: 20px;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 5px;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Headline = styled.h2`
  font-weight: 600;
`;

const HotkeyWrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: white;

  & :first-child {
    border-radius: 4px;
  }
`;

const Category = styled.div`
  border-bottom: 1px solid whitesmoke;
  padding: 5px 20px 3px 20px;
  background-color: #f9f9f9;
  text-transform: uppercase;
  font-weight: 600;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Home = () => (
  <div>
    <Nav />
    <SiteWrapper>
      <Application>
        <ApplicationHeader>
          <Logo>
            <img
              src={AppleSVG}
              alt=""
              style={{ position: 'relative', top: '-3px' }}
            />
          </Logo>
          <Headline>macOS</Headline>
        </ApplicationHeader>
        <HotkeyWrapper>
          <Hotkey combination={['⌘', '←']} header="Move to start of line" />
          <Hotkey combination={['⌘', '→']} header="Move to end of line" />
          <Hotkey
            combination={['⇧', '⌘', '←']}
            header="Select from caret to start"
          />
          <Hotkey
            combination={['⇧', '⌘', '→']}
            header="Select from caret to end"
          />
        </HotkeyWrapper>
      </Application>

      <Application>
        <ApplicationHeader>
          <Logo>
            <img src={VSCodeImage} alt="" class="logo" />
          </Logo>
          <Headline>Visual Studio Code</Headline>
        </ApplicationHeader>

        <HotkeyWrapper>
          <Category>Move & Copy</Category>
          <Hotkey combination={['⌥', '↑']} header="Move line up" />
          <Hotkey combination={['⌥', '↓']} header="Move line down" />
          <Hotkey combination={['⇧', '⌥', '↑']} header="Duplicate line up" />
          <Hotkey combination={['⇧', '⌥', '↓']} header="Duplicate line down" />

          <Category>Selection</Category>
          <Hotkey combination={['⌘', 'D']} header="Find next of selection" />
          <Hotkey
            combination={['⌘', 'K', PLUS, '⌘', 'D']}
            header="Skip next of selection"
          />
          <Hotkey
            combination={['⇧', '⌃', '⌘', '→']}
            header="Select content inside HTML tag"
            description={
              <span>
                Press <Key inline>→</Key> to expand the selection. Press{' '}
                <Key inline>←</Key> to shrink the selection.
              </span>
            }
          />
          <Hotkey
            combination={['⇧', '⌥', PLUS, CURSOR_DRAG]}
            header="Column selection"
          />
          <Hotkey combination={['⌘', 'U']} header="Undo cursor position" />
          <Hotkey
            combination={['⌘', PLUS, CURSOR]}
            header="Open or create file"
            description="Click on a file path to open it"
          />

          <Category>Search</Category>
          <Hotkey combination={['⌘', 'F']} header="Find" />
          <Hotkey
            combination={['⌥', 'Enter']}
            header="Select all occurrences of Find match"
          />
          <Hotkey combination={['⌘', 'G']} header="Find next" />
          <Hotkey combination={['⇧', '⌘', 'G']} header="Find previous" />
          <Hotkey combination={['⇧', '⌘', 'F']} header="Find all" />

          <Category>Panes</Category>
          <Hotkey combination={['⌘', '\\']} header="New pane" />
          <Hotkey
            combination={['⌘', '1', OR, '⌘', '2', OR, '⌘', '3']}
            header="Go to pane"
          />

          <Category>Interface</Category>
          <Hotkey combination={['⌘', 'B']} header="Toggle sidebar" />
          <Hotkey combination={['⇧', '⌘', 'M']} header="Toggle error" />
          <Hotkey combination={['⇧', '⌘', 'E']} header="File explorer" />
          <Hotkey combination={['⇧', '⌘', 'D']} header="Debugger" />
          <Hotkey combination={['⇧', '⌘', 'X']} header="Extensions" />

          <Category>Misc.</Category>
          <Hotkey combination={['F2']} header="Rename symbol" />
          <Hotkey combination={['⌘', 'I']} header="Select current line" />
        </HotkeyWrapper>
      </Application>
    </SiteWrapper>
  </div>
);

export default Home;
