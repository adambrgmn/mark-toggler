// @flow

function getBookmarks(): Promise<Array<chrome$BookmarkTreeNode>> {
  return new Promise(resolve => {
    chrome.bookmarks.getTree(resolve);
  });
}

export { getBookmarks };
