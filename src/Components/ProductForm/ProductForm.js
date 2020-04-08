import React from "react";
import { CardPanel } from "react-materialize";

import "./productForm.css";
import products from "../../constants/products.js";

const ProductForm = props => {

    const Radios = () => {

    let currentProduct = products.products.pos.questions1.map((item) => {
        console.log("new line" + item);
        return (
            <div className="customRadio">
                <CardPanel>
                <input
                    type="radio" name="product"
                    id={products.products.pos.name} value="test" />
                <label for='test'>
                    <img className="radioImage"
                        src="//placekitten.com/151/151"
                        alt="I'm happy" />
                </label>
                <p>{item}</p>
            </CardPanel>
            </div>
            );
    });
        return currentProduct;
    };

    // use state once submit his hit, to slide in the second set of questions

    return (
        // <CardPanel className="formCard">
        <div id="radioDiv">
            <Radios />
        </div>
        // </CardPanel>
    )
};

export default ProductForm;