import React from 'react'
import { Link } from "react-router-dom";
import { truncate } from "../utils/string";

function ProductItem({ product }) {

    function thumbnail() {
        if (!Array.isArray(product.images) || product.images.length < 1) {
            return ''; // TODO: Return placeholder image here.
        }

        return product.images[0];
    }

    return (
        <div className="rounded bg-violet-300 p-8">
            <Link to={`/products/${product.id}`}>
                <img className="max-h-36" src={thumbnail()} />
                <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
                <p className="font-bold">${product.price}</p>
                <p className="">{truncate(product.description)}</p>
            </Link>
        </div>
    )
}

export default ProductItem