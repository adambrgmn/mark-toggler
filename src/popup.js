// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { globalStyles } from './styles';
import { getBookmarks } from './api/chrome';
import { traverseBookmarks } from './utils';
import { AppContainer } from './components/Container';
import Loader from './pages/Loader';
import FolderPicker from './pages/FolderPicker';

type Props = {};

type State = {
  state: 'initial' | 'pick' | 'toggle',
  folders: Array<chrome$BookmarkTreeNode>,
};

class App extends Component<Props, State> {
  state = {
    state: 'initial',
    folders: [],
  };

  async componentDidMount() {
    setTimeout(() => this.findBookmarkFolders(), 500);
  }

  findBookmarkFolders = async () => {
    const bookmarks = await getBookmarks();
    const folders = await traverseBookmarks(bookmarks[0].children);

    this.setState(() => ({ folders, state: 'pick' }));
  };

  activateFolder = ({ id }: chrome$BookmarkTreeNode) => {
    console.log(id); // eslint-disable-line
    this.setState(() => ({ state: 'initial' }));
  };

  render() {
    const { state } = this.state;
    return (
      <AppContainer>
        <Loader active={state === 'initial'} />
        <FolderPicker
          active={state === 'pick'}
          folders={this.state.folders}
          onClick={this.activateFolder}
        />
      </AppContainer>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  globalStyles();
  ReactDOM.render(<App />, root);
}
