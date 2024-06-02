import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl, getData } from "../utils/getData";

export default function Product() {
    // Стан інфомрації про товар
    const [product, setProduct] = useState({});

    // Отримуємо id продукту
    const { productid } = useParams();

    // Звернутися до сервера
    const fetchProduct = async () => {
        const productApi = await getData(apiUrl.product + productid);
        setProduct(productApi);
    };

    // Викликати hook, який відповідає за завантаження інформації після монтування (завантаження) сторінки
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Old price:{product.oldprice}</p>
        </div>
    );
}
