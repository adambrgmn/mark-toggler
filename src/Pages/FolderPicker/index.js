// @flow
import React from 'react';
import * as Styles from './styles'; // eslint-disable-line

type Props = {
  folders: Array<chrome$BookmarkTreeNode>,
  onClick: chrome$BookmarkTreeNode => void | Promise<void>,
};

function FolderPicker({ folders, onClick }: Props) {
  return (
    <Styles.Container>
      <Styles.Title>Pick a folder</Styles.Title>
      <ul>
        {folders.map(folder => (
          <li key={folder.id}>
            <button onClick={() => onClick(folder)}>{folder.title}</button>
          </li>
        ))}
      </ul>
    </Styles.Container>
  );
}

export { FolderPicker };
