import React, { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearTimeout(counter);
    };
  });
  return (
    <div>
      <h1>You have been {count} seconds on this website</h1>
    </div>
  );
}

export default WatchCount;
