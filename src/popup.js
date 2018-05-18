// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { getBookmarks } from './api/chrome';
import { traverseBookmarks } from './utils';
import { FolderPicker } from './pages/FolderPicker';

type Props = {};

type State = {
  folders: Array<chrome$BookmarkTreeNode>,
};

class App extends Component<Props, State> {
  state = {
    folders: [],
  };

  async componentDidMount() {
    this.findBookmarkFolders();
  }

  findBookmarkFolders = async () => {
    const bookmarks = await getBookmarks();
    const folders = await traverseBookmarks(bookmarks[0].children);

    this.setState(() => ({ folders }));
  };

  activateFolder = ({ id }: chrome$BookmarkTreeNode) => {
    console.log(id); // eslint-disable-line
  };

  render() {
    return (
      <div>
        <FolderPicker
          folders={this.state.folders}
          onClick={this.activateFolder}
        />
      </div>
    );
  }
}

injectGlobal`${normalize()}`; // eslint-disable-line

const root = document.getElementById('root');
if (root) ReactDOM.render(<App />, root);
