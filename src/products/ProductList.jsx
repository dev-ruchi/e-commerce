import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/string";
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BACKEND}/products`,
        })
            .then(res => {
                setProducts(res.data);
            })
    }, []);

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
                <div className="rounded bg-violet-300 p-8" key={`product-${product.id}`} >
                    <Link to={`/products/${product.id}`}>
                        <img className="max-h-36" src='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg' />
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