import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aside } from './components/Aside/Aside';
import CartProvider from './components/Conttext/CartContext';
import ItemListContainer from './components/itemsPrincipal/ItemListContainer';
import { ItemDetatilContatiner } from './components/ItemsDetail/ItemDetatilContatiner';
import { Cart } from './components/Cart/Cart';
import { Comprar } from './components/Cart/Comprar';



function App() {

  

  return (

    <div className="wrapper">
      <BrowserRouter>
        <CartProvider>
          <Aside />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetatilContatiner/>}/>
            <Route path='/cartcheckout' element={<Cart/>}/>
            <Route path='/comprar' element={<Comprar/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
