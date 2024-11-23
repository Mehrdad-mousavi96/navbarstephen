import React from 'react'

const Product = ({title, price, image}) => {
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <h3>{title}</h3>
            <p>{title}</p>
        </div>

        <button>افزودن به سبد خرید</button>

    </div>
  )
}

export default Product