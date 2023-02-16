import { useEffect, useState } from "react";

function App() {

  const [storeItems, setStoreItems] = useState([]);

  async function fetchFakeItems() {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const items = await data.json();
    setStoreItems(items);
  }

  useEffect(() => {
    fetchFakeItems();
  }, []);

  return (
   <div>
    <button onClick={() => console.log(storeItems)}>Click Me!</button>
   </div>
  )
}

export default App
