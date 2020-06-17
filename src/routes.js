import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Products from "./Pages/Products"
import ProductCreate from "./Pages/Product/Create"
import ProductEdit from "./Pages/Product/Edit"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/new-product">
          <ProductCreate />
        </Route>
        <Route path="/product/:productId">
          <ProductEdit />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
