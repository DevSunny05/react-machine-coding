import React, { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./component/Folder";

const FolderApp = () => {
  const [explorereData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explorereData={explorereData} />
    </div>
  );
};

export default FolderApp;
