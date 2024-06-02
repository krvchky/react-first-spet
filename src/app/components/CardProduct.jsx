import { Link } from "react-router-dom";

export default function CardProduct({ product }) {
    return (
        <li>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
    );
}
