import React, { useMemo, useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(2);
  
  const multiCountMemo = useMemo(function multiCount() {
    console.warn("multiCount")
    return count*7
  },[count])
  return (
    <div>
      <h1>UseMemo Hooks</h1>
      
      <h2>Count : {count}</h2>
      <h2>Items : {item}</h2>
<h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={()=>setItem(item*12)}>Update Item</button>

    </div>
  )
}

export default App