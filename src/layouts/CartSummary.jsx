import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown,Label } from 'semantic-ui-react'
import {useSelector} from "react-redux"
export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)//sepet elimizde,redux a abone olduk
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
              {
                cartItems.map((cartItem)=>(
                    <Dropdown.Item>{cartItem.product.productId}
                    <Label>{cartItem.quantity}</Label>
                    </Dropdown.Item>
                   
                ))
              }
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
