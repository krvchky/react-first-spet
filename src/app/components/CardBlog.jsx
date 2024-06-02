import { Link } from "react-router-dom";

export default function CardBlog({ product }) {
    return (
        <li>
            <Link to="/">{product.title}</Link>
        </li>
    );
}
