import React, { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrementQuantity}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-l"
      >
        -
      </button>
      <div className="bg-gray-200 px-3 py-1">{quantity}</div>
      <button
        onClick={incrementQuantity}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
