// @flow
import React from 'react';

type Props = {
  folders: Array<chrome$BookmarkTreeNode>,
  onClick: chrome$BookmarkTreeNode => void | Promise<void>,
};

function FolderPicker({ folders, onClick }: Props) {
  return (
    <div>
      <h1>Pick a folder</h1>
      <ul>
        {folders.map(folder => (
          <li key={folder.id}>
            <button onClick={() => onClick(folder)}>{folder.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { FolderPicker };
