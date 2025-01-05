```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}
export default MyComponent;
```