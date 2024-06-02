import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blogs";
import FormReg from "./components/FormReg";
import About from "./pages/About";
import Location from "./pages/Location";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="product/:productid" element={<Product />} />
                    <Route path="category/:id" element={<Category />} />
                    <Route path="location" element={<Location />} />
                    <Route path="reg" element={<FormReg />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
