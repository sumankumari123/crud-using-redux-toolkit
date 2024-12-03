import React, { useState, useEffect } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]); // State to store API data

  const handlePlush = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setCount(count - 1);
  };

useEffect(()=>{
console.log(`component mount ${count}`)
return()=>{
    console.log(`component unmount ${count}`)
}
},[count])

  const api = "https://jsonplaceholder.typicode.com/todos";
//   useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const data = await fetch(api);
    //     const apiData = await data.json();
    //     setPosts(apiData);
    //   } catch (error) {
    //     return error;
    //   }
    // };
    // fetchData();


//   }, []);


//   console.log(posts);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handlePlush} className="mx-2">
          +
        </button>
        <button onClick={handleSub}>_</button>
      </div>

      {/* <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>_</button> */}
    </div>
  );
};

export default Practice;
