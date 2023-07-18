import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-preview" key={product.id} >
                    <Link to={`/products/${product.id}`}>
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p>{product.slug}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>

                    </Link>
                </div>
            ))

            }
        </div>
    )


}

export default ProductList;