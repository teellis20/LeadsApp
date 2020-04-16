import React from "react";

import products from "../../constants/products";
import "./productsHome.css";

const ProductsHome = props => {

    const ProductList = () => {
        let productArr = products.products.map((item) => {
            console.log("new line" + item + "and" + item.name);
            let url = "/product/" + item.name;
            return (
                <a className="productHover" href={url}>
                    {/* src={item.img} */}
                    <img className="productImage" src={item.homeImage} alt="random" />
                </a>
            )
        });
        return productArr;
    }

    return (
        <div id="productHome" className="container">
            <h2>Our Products</h2>
            <div id="productContainer">
                <ProductList />
            </div>
        </div>
    );
};

export default ProductsHome;