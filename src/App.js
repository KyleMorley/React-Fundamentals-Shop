import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Cart from './components/Cart';
import Notification from './components/Notification';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);

  // Get items from database
  useEffect(() => {
      const getItems = async() => {
          const items = await fetchItems();
          setItems(items);
      }

      getItems();

  }, []);

  const fetchItems = async () => {
      const res = await fetch('http://localhost:4000/packages');
      const data = await res.json();
      return data;
  }

  const addItemToCart = (addedItem) => {
    if(item.includes(addedItem)) {
      toast.error('You already added his item to your cart')
    } else {
      setItem([...item, addedItem]);
      count >= 0 ? setCount(count + 1) : setCount(0);
    }
  }

  const removeItemFromCart = (id) => {
    setItem(item.filter((i) => i.id !== id));
    setCount(count - 1);
  }

  return (
    <div className="App">
      <Nav count={count}/>
      <main>
        <Routes>
          <Route path='/' element={<Services addItem={ addItemToCart } items={items}/>} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart  item={item} removeItem={ removeItemFromCart }/>} />
        </Routes>
      </main>
      <Notification />
    </div>
  );
}

export default App;
