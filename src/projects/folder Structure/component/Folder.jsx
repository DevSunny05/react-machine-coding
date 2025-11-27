import { useState } from "react";

const Folder = ({ explorereData }) => {
  console.log(explorereData);
  const [expand, setExpand] = useState(false);

  if (explorereData.isFolder) {
    return (
      <div>
        <div
          onClick={() => setExpand(!expand)}
          style={{
            cursor: "pointer",
            padding: "4px",
            justifyContent: "space-between",
            display: "flex",
            marginTop: "4px",
            backgroundColor: "lightgray",
            width: "200px",
            alignItems: "center",
          }}
        >
          <span>📁{explorereData.name}</span>
        </div>

        <div
          style={{
            marginLeft: "16px",
            display: expand ? "block" : "none",
            paddingLeft: "20px",
          }}
        >
          {explorereData.items.map((exp) => {
            return <Folder key={exp.id} explorereData={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄 {explorereData.name}</span>
      </div>
    );
  }
};

export default Folder;
