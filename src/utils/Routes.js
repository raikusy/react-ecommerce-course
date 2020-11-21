import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home'));
const Product = loadable(() => import('../pages/Product'));
const Checkout = loadable(() => import('../pages/Checkout'));

// const routes = [
//   {
//     name: 'Home',
//     path: '/',
//     Component: Home,
//   },
// ]

export default function Routes() {
  return (
    <Router>
      <div>
        <nav className="container">
          <ul className="text-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/product/1">Product</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="w-full bg-gray-100 p-10">
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
