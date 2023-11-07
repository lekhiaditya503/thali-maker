import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Size from './components/Size';
import Dish from './components/Dish';
import Order from './components/Order';
import Cart from './components/Cart';

function App() {
  const [thali, setThali] = useState({ size: "", dishes: [] });

  const addSize = (size) => {
    setThali({ ...thali, size })
  }
  
  const addDish = (item) => {
    let newDishes;
    if(!thali.dishes.includes(item)){
      newDishes = [...thali.dishes, item];
    } else {
      newDishes = thali.dishes.filter(it => it !== item);
    }
    setThali({ ...thali, dishes: newDishes });
  }

  const clearThali =  () =>{
    setThali({ size: "", dishes: [] });
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/size" element={ <Size addSize={addSize} thali={thali} />}/>
        <Route path="/dish" element={ <Dish addDish={addDish} thali={thali} />}/>
        <Route path="/order" element={<Order thali={thali} clearThali={clearThali} />}/>
        <Route path="/cart" element={<Cart clearThali={clearThali} />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;