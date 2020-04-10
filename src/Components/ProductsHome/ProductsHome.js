import React from "react";

import products from "../../constants/products";
import "./productsHome.css";

const ProductsHome = props => {

const ProductList = () => {
    let productArr = products.products.map((item) => {
        console.log("new line" + item + "and" + item.name);
        let url = "/product/" + item.name;
        return (
            // <div className="productList">
                <a href={url}>
                    {/* src={item.img} */}
                <img className="productImage" src="https://loremflickr.com/360/360" alt="random" />
                </a>
            // </div>
        )
    });
        return productArr;
}

    return(
        <div id="productContainer">
            <ProductList />
        </div>
    );
};

export default ProductsHome;