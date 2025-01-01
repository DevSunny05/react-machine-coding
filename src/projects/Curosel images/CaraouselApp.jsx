import React, { useEffect, useState } from "react";

const CaraouselApp = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetcahData = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
    const result = await res.json();
    const data = result.data.children;

    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);
  };

  const handleClick = (dir) => {
    console.log("curr index", index);
    const lastIndex = images.length - 1;

    if (dir === "left") {
      if (index === 0) {
        console.log(" index", index);
        setIndex(lastIndex);
      } else {
        setIndex(index - 1);
      }
    } else {
      if (index === lastIndex) {
        console.log(" index", index);
        setIndex(0);
      } else {
        console.log(" index", index);

        setIndex(index + 1);
      }
    }
  };

//   useEffect(() => {
//     const tid = setInterval(() => {
//       handleClick("right");
//     }, 1000);

//     return () => {
//       clearInterval(tid);
//     };
//   }, [index]);

  useEffect(() => {
    fetcahData();
  }, []);
  return (
    <div style={{ display: "flex", alignItems: "center" }} className="">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button
            onClick={() => handleClick("left")}
            className="corousel_button"
          >
            {"<"}
          </button>
          <img className="img__caraousel" src={images[index]} alt="" />
          <button
            onClick={() => handleClick("right")}
            className="corousel_button right"
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default CaraouselApp;
