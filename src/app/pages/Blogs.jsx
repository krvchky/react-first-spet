import { getData } from "../utils/getData";
import { useEffect, useState } from "react";
import CardBlog from "../components/CardBlog";

export default function Blogs() {
    const [catalog, setСatalog] = useState([]);

    const fetchData = async () => {
        const productList = await getData("https://dummyjson.com/posts");
        setСatalog(productList.posts);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="blogs">
            <h1>Blog articles:</h1>
            <ul>
                {" "}
                {catalog.length === 0 ? (
                    <p>No Results</p>
                ) : (
                    catalog.map((product, index) => {
                        return <CardBlog key={index} product={product} />;
                    })
                )}
            </ul>
        </div>
    );
}
