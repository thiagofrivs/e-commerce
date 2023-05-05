import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aside } from './components/Aside/Aside';
import CartProvider from './components/Conttext/CartContext';
import ItemListContainer from './components/itemsPrincipal/ItemListContainer';
import { ItemDetatilContatiner } from './components/ItemsDetail/ItemDetatilContatiner';



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
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
