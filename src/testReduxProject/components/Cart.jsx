import React from 'react'
import CartItems from './CartItems'

const Cart = ({onClose}) => {
  return (
    <div>
        <div>
            <h2>سبد خرید</h2>
            <CartItems />
            <p><button onClick={onclose}>بستن</button></p>
        </div>
    </div>
  )
}

export default Cart