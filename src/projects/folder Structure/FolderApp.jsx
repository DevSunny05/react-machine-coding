import React, { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./component/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

const FolderApp = () => {
  const [explorereData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorereData, folderId, item, isFolder);
    setExplorerData({ ...finalTree });
  };
  return (
    <div>
      <Folder
        handleInsertNode={handleInsertNode}
        explorereData={explorereData}
      />
    </div>
  );
};

export default FolderApp;
