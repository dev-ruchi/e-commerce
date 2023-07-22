import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/string";


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
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
                <div className="rounded bg-violet-300 p-8" key={product.slug} >
                    <Link to={`/products/${product.id}`}>
                        <img className="max-h-36" src={product.image} />
                        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
                        <p className="font-bold">${product.price}</p>
                        <p className="">{truncate(product.description)}</p>
                    </Link>
                </div>
            ))
            }
        </div>
    )


}

export default ProductList;