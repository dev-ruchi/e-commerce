import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import backend from "utils/backend";
import ReviewList from "./ReviewList";
import { toPrice } from "utils/number";
import ReviewForm from "./ReviewForm";

const ProductView = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(function () {
    backend.get(`/products/${slug}`).then((res) => setProduct(res.data));
  }, []);

  useEffect(
    function () {
      if (Array.isArray(product.images) && product.images.length > 0) {
        setActiveImage(product.images[0]);
      }
    },
    [product],
  );

  return (
    <div>
      <div className="mt-8 md:mt-20 md:grid md:grid-cols-10 md:gap-8">
        <div className="col-span-4 mb-8 md:mb-0">
          {activeImage && <img className="w-1/2 mx-auto" src={activeImage} />}
        </div>
        <div className="col-span-6">
          <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
          <p className="text-green-600 font-bold mb-3">
            {toPrice(product.price)}
          </p>
          <p>{product.description}</p>
        </div>
      </div>
      <div>
        <ReviewForm />
      </div>
      <div>
        <ReviewList />
      </div>
    </div>
  );
};

export default ProductView;
