import { useParams } from "react-router-dom";

const ProductView = () => {
    let { slug } = useParams();
    return (
        <div className="products">
            <h2>Products { slug }</h2>
        </div>
    )
}

export default ProductView;