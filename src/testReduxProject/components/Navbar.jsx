import React, { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleOpenCart = () => setCartIsOpen(true);
  const handleCloseCart = () => setCartIsOpen(false);
  return (
    <div>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}
      <div>
        <button onClick={handleOpenCart}>سبد خرید</button>
      </div>
    </div>
  );
};

export default Navbar;
