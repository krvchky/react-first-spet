import CardProduct from "../components/CardProduct";
import { useEffect, useState } from "react";
import { apiUrl, getData } from "../utils/getData";
import { Link } from "react-router-dom";

export default function Shop() {
    // Створюємо стан для збереження товарів
    const [catalog, setСatalog] = useState([]);
    const [category, setCategory] = useState([]);

    // Отримуємо товари сервера
    const fetchData = async () => {
        const productList = await getData(apiUrl.catalog);
        setСatalog(productList);
    };

    // Отримуємо категорії сервера
    const fetchCategory = async () => {
        const categoryList = await getData(apiUrl.category);
        setCategory(categoryList);
    };

    // Завантажуєио товари сервера один раз при завантаженні сторінки
    useEffect(() => {
        fetchData();
        fetchCategory();
    }, []);

    return (
        <div className="shop">
            <h1>Shop products:</h1>
            <div className="categories">
                {category.map((cat, index) => {
                    return (
                        <Link to={`/category/${cat.id}`} key={index}>
                            {cat.title}
                        </Link>
                    );
                })}
            </div>
            <ul>
                {catalog.length === 0 ? (
                    <p>No Results</p>
                ) : (
                    catalog.map((product, index) => {
                        return <CardProduct key={index} product={product} />;
                    })
                )}
            </ul>
        </div>
    );
}
