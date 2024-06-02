import CardProduct from "../components/CardProduct";
import { useEffect, useState } from "react";
import { apiUrl, getData } from "../utils/getData";
import { Link, useParams } from "react-router-dom";

export default function Category() {
    // Створюємо стан для збереження товарів
    const [catalog, setСatalog] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    // Отримати дані з параметрів посилання
    const { id } = useParams();

    // Отримуємо товари сервера
    const fetchData = async () => {
        const productList = await getData(apiUrl.catalogByCatid + id);

        if (productList === "Not found") {
            setСatalog([]);
        } else {
            setСatalog(productList);
        }
    };

    // Отримуємо категорії сервера
    const fetchCategory = async () => {
        const categoryList = await getData(apiUrl.category);
        setCategoryList(categoryList);
    };

    // Завантажуєио товари сервера один раз при завантаженні сторінки
    useEffect(() => {
        fetchData();
        fetchCategory();
    }, [id]);

    return (
        <div className="shop">
            <h1>Shop products:</h1>
            <div className="categories">
                {categoryList.map((cat, index) => {
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
