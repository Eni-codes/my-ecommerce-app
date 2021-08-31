import React from 'react';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">  
    <header className="row">
        <div className="brand">
            <a href="/">Soo Fine Beauty Shop</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in </a>
        </div>
    </header>
    <main>
   
      <Route path="/product/:id" component={ProductScreen} ></Route>
      <Route path="/" component={HomeScreen} exact></Route>
  
    </main>
    <footer className="row center">
        all rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
