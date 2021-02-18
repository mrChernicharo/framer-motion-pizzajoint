import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  const location = useLocation(); // <- gets info about the current route
  // cannot be used here, it'supposed to be used by child components

  const [pizza, setPizza] = useState({ base: '', toppings: [] });

  const addBase = base => {
    setPizza({ ...pizza, base });
  };

  const addTopping = topping => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;

// estamos cercando todas as rotas do app com AnimatePresence, pra fazê-lo:
// 1. cercamos o <Switch/> com a tag <AnimatePresence/>
// 2. usamos useLocation() e passamos o location pra tag <Switch / >
// 3. criamos uma animação pra rodar no exit de cada componente/rota
// 4. já funciona, mas pra evitar animações mal engatilhadas, usamos exitBeforeEnter na tag <AnimatePresence/>
