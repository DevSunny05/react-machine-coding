const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      // Return a new tree with the new item added
      return {
        ...tree,
        items: [
          {
            id: new Date().getTime(),
            name: item,
            isFolder,
            items: [],
          },
          ...tree.items,
        ],
      };
    }
    if (!tree.items) return tree;
    return {
      ...tree,
      items: tree.items.map((obj) => insertNode(obj, folderId, item, isFolder)),
    };
  }

  return { insertNode };
};

export default useTraverseTree;
