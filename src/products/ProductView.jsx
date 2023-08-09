import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const ProductView = () => {
    let { slug } = useParams();
    const [product, setProduct] = useState([])

    useEffect(function () {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BACKEND}/products/${slug}`
        })
            .then(res => {
                setProduct(res.data);
            })
    }, [])




    return (
        <div className="mt-8 md:mt-20 md:grid md:grid-cols-10 md:gap-8">
            <div className="col-span-4 mb-8 md:mb-0">
                <img className="w-full" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg" />
            </div>
            <div className="col-span-6">
                <h2 className="text-2xl font-bold mb-5">{product.title}</h2>
                <p className="font-bold mb-5">{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductView;