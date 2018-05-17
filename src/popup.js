// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getBookmarks } from './api/chrome';
import { traverseBookmarks } from './utils';
import { FolderPicker } from './Pages/FolderPicker';

type Props = {};

type State = {
  folders: Array<chrome$BookmarkTreeNode>,
};

class App extends Component<Props, State> {
  state = {
    folders: [],
  };

  async componentDidMount() {
    this.traverseBookmarks();
  }

  traverseBookmarks = async () => {
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

const root = document.getElementById('root');
if (root) ReactDOM.render(<App />, root);
