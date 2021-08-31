import React from 'react'
import { Route } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
export default function Dashboard() {
    return (
        <div>
          <ToastContainer position="bottom-right"/>
          <Grid>
            <GridRow>
              <GridColumn width={4}>
                 <Categories/>
              </GridColumn>
              <GridColumn width={12}>
              <Route exact path="/" component={ProductList}/>
              <Route exact path="/products" component={ProductList}/>
              <Route path="/products/:name" component={ProductDetail}/>
              <Route exact path="/cart" component={CartDetail}/>

              </GridColumn>
            </GridRow>
          </Grid>
       
            
        </div>
    )
}
