import './css/styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

export default function TodoApp() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  )
}
