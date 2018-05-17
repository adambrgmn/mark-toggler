// @flow

const isObject = (val: any): boolean =>
  val != null && typeof val === 'object' && Array.isArray(val) === false;

function asyncIdleCallback<T>(cb: () => T | Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    requestIdleCallback(() => {
      Promise.resolve()
        .then(() => cb())
        .then(resolve)
        .catch(reject);
    });
  });
}

async function traverseBookmarks(
  bookmarks: ?Array<chrome$BookmarkTreeNode>,
  arr: Array<chrome$BookmarkTreeNode> = [],
): Promise<Array<chrome$BookmarkTreeNode>> {
  try {
    if (Array.isArray(bookmarks)) {
      await Promise.all(
        bookmarks.map(async mark => {
          if (Array.isArray(mark.children)) {
            arr.push(mark);
            await asyncIdleCallback(() =>
              traverseBookmarks(mark.children, arr),
            );
          }
        }),
      );
    }
    return arr;
  } catch (err) {
    return arr;
  }
}

export { isObject, traverseBookmarks };
