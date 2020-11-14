import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
} from './pages'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route>
          <Cart paht='/cart' />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} />
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
