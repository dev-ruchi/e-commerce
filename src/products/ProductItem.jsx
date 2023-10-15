import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "utils/string";
import { toPrice } from "utils/number";
import { Star } from "react-feather";

function ProductItem({ product }) {
  function thumbnail() {
    if (!Array.isArray(product.images) || product.images.length < 1) {
      return ""; // TODO: Return placeholder image here.
    }

    return product.images[0];
  }

  return (
    <div className="bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="h-40 mb-4">
          <img
            className="h-full mx-auto"
            src={thumbnail()}
            alt={product.title}
          />
        </div>
        <div className="flex justify-between">
          <div className="text-blue-600">Smartphone</div>
          <div className="text-blue-600 flex items-center mb-1.5">
            <Star size={20} color="gold" className="mr-1" />
            <span>4.4</span>
          </div>
        </div>
        <h2 className="text-md font-bold mb-1">{product.title}</h2>
        <p className=" text-green-700 font-semibold mb-1">
          {toPrice(product.price)}
        </p>
        <p>{truncate(product.description, 80)}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
