import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import backend from "utils/backend";
import ReviewList from "./ReviewList";
import { toPrice } from "utils/number";
import ReviewForm from "./ReviewForm";
import Button from "ui/Button";

const ProductView = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(
    function () {
      backend.get(`/products/${slug}`).then((res) => setProduct(res.data));
    },
    [slug],
  );

  useEffect(
    function () {
      if (
        product &&
        Array.isArray(product.images) &&
        product.images.length > 0
      ) {
        setActiveImage(product.images[0]);
      }
    },
    [product],
  );

  function addToCart() {
    let cartData = localStorage.getItem("cartItems");

    const cartItems = cartData ? JSON.parse(cartData) : [];

    const productIndex = cartItems.findIndex(
      (item) => item.productId === product.id,
    );

    if (productIndex > -1) {
      cartItems[productIndex].count++;
    } else {
      cartItems.push({
        productId: product.id,
        count: 1,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return product ? (
    <div>
      <div className="mt-8 md:mt-20 md:grid md:grid-cols-10 md:gap-8">
        <div className="col-span-4 mb-8 md:mb-0">
          {activeImage && (
            <img className="border rounded p-2 mx-auto" src={activeImage} />
          )}

          <div className="flex mt-2 gap-4">
            <Button label="Buy now" uiType="success" />
            <Button label="Add to Cart" onClick={addToCart} />
          </div>
        </div>
        <div className="col-span-6">
          <div className="mb-14">
            <h1 className="text-2xl font-bold mb-3 md:text-4xl">
              {product.title}
            </h1>
            <p className="text-green-600 text-2xl font-bold mb-3">
              {toPrice(product.price)}
            </p>
            <p className="text-lg">{product.description}</p>
          </div>

          <div className="mb-6">
            <ReviewForm productId={product.id} />
          </div>
          <div>
            <ReviewList />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default ProductView;
