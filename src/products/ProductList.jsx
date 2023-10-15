import { useEffect, useState } from "react";
import backend from "utils/backend";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    backend.get(`/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductItem key={`product-${product.id}`} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
