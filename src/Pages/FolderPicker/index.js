// @flow
import React from 'react';
import * as Styles from './styles'; // eslint-disable-line
import { SectionContainer } from '../../components/Container';

type Props = {
  active: boolean,
  folders: Array<chrome$BookmarkTreeNode>,
  onClick: chrome$BookmarkTreeNode => void | Promise<void>,
};

function FolderPicker({ active, folders, onClick }: Props) {
  return (
    <SectionContainer active={active}>
      <Styles.Header>
        <Styles.Title>Pick a folder</Styles.Title>
        <Styles.Description>
          Choose a folder to start flickering through
        </Styles.Description>
      </Styles.Header>

      <Styles.FolderList>
        {folders.map(folder => (
          <Styles.FolderListItem key={folder.id}>
            <Styles.FolderButton onClick={() => onClick(folder)}>
              {folder.title}
            </Styles.FolderButton>
          </Styles.FolderListItem>
        ))}
      </Styles.FolderList>
    </SectionContainer>
  );
}

export { FolderPicker as default };
