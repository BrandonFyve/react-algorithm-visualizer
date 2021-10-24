import React, { useState } from "react";
import Page from "../../components/Page/Page";
import { bubbleSort } from "../../Utils/sorts";

const BubbleSort = () => {
  const [data, setData] = useState([1, 6, 3, 2]);

  const handleClick = () => {
    setData(bubbleSort([...data]));
  };

  return (
    <Page>
      <button onClick={handleClick}>Sort</button>
      <div className="grid grid-cols-12 gap-2">
        {data.map((item) => (
          <div
            className="bg-gray-500 rounded-md"
            style={{ height: `${item * 10}vh` }}
          ></div>
        ))}
      </div>
    </Page>
  );
};

export default BubbleSort;
