import { useState } from "react";

const Folder = ({ explorereData, handleInsertNode }) => {
  console.log(explorereData);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorereData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorereData.isFolder) {
    return (
      <div>
        <div
          onClick={() => setExpand(!expand)}
          style={{
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
            backgroundColor: "lightgray",
            width: "250px",
            alignItems: "center",
          }}
        >
          <span>📁{explorereData.name}</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <button
              onClick={(e) => handleNewFolder(e, true)}
              style={{ padding: "2px" }}
            >
              Folder +
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              style={{ padding: "2px" }}
            >
              File +
            </button>
          </div>
        </div>

        <div
          style={{
            marginLeft: "16px",
            display: expand ? "block" : "none",
            paddingLeft: "20px",
          }}
        >
          {showInput.visible && (
            <div style={{ marginLeft: "4px", marginTop: "4px" }}>
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                type="text"
                style={{ padding: "2px" }}
                onKeyDown={onAddFolder}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorereData.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorereData={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "5px", paddingLeft: "5px" }}>
        <span>📄 {explorereData.name}</span>
      </div>
    );
  }
};

export default Folder;
