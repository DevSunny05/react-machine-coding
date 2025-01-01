import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [food, setFood] = useState("");
  const [shopingList, setShopingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleChange = (e) => {
    setFood(e.target.value);
  };

  const fetData = async (food) => {
    const res = await fetch(`https://api.frontendeval.com/fake/food/${food}`);
    const data = await res.json();
    setShopingList(data);
  };

  const handleShoppingList = (e) => {
    // console.log(e.target.getAttribute("data-id"))
    const idx = e.target.getAttribute("data-id");

    if (idx) {
      const obj = {
        id: Date.now(),
        data: shopingList[idx],
        isDone: false,
      };

      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setFood("");
  };
  
  const handleRightClick=(id)=>{
    const copyBucketList=[...bucketList]
    const newBucketList=copyBucketList.map((item)=>{
        if(item.id===id){
            item.isDone=!item.isDone
        }
        return item;
    })
    setBucketList(newBucketList)
  }

  const handleDelete=(id)=>{
    const copyBucketList=[...bucketList]
    const newBucketList=copyBucketList.filter((item)=>item.id !==id)
    setBucketList(newBucketList)
  }

  useEffect(() => {
    if (food.length >= 2) {
      fetData(food);
    }
  }, [food]);

  return (
    <div className="app">
      <h1>Shopping List </h1>
      <div>
        <input
          value={food}
          onChange={handleChange}
          className="shopping_input"
          type="text"
        />
      </div>

      {food.length >= 2 ? (
        <div className="shopping__list" onClick={handleShoppingList}>
          {shopingList.map((item, index) => (
            <div data-id={index} className="shopping__item">
              {item}
            </div>
          ))}
        </div>
      ):null}

      <div className="bucket__list">
        {bucketList.map((item) =>{
            return <div className="single__listItem">
            <button onClick={()=>handleRightClick(item.id)} className="list__button">✔</button>
            <div className={item.isDone?'strike':""}>{item.data}</div>
            <button onClick={()=>handleDelete(item.id)}  className="list__button">❌</button>
          </div>
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
