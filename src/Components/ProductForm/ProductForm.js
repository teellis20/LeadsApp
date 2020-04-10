import React, { useEffect } from "react";
import { CardPanel } from "react-materialize";

import "./productForm.css";
import products from "../../constants/products.js";


const ProductForm = props => {
    
let url = props.match.params.product;
console.log(url + "is type of " + typeof(url));
let productIndex = 0;

useEffect(() => getCurrentProduct(), []);

const getCurrentProduct = () => {
    productIndex = 0;
    for (let i = 0; i < products.products.length; i++) {
        if (url === products.products[i].name) {
            productIndex = i;
            console.log("this worked! " + products.products[i].name + " array of" + i);
        }
    }
    return productIndex;
}


    const Radios = () => {
    
        getCurrentProduct();
        console.log("this is test/ array number " + productIndex)
        let currentProduct = products.products[productIndex].questions1.map((item) => {
        console.log("new line" + item);
        return (
            <div className="customRadio">
                {/* <CardPanel> */}
                <input
                    type="radio" name="product"
                    id={item.name} value="test" />
                <label for='test'>
                    <img className="radioImage"
                        src="//placekitten.com/151/151"
                        alt="I'm happy" />
                </label>
                <p>{item}</p>
            {/* </CardPanel> */}
            </div>
            );
    });
        return currentProduct;
    };

    // use state once submit his hit, to slide in the second set of questions

    return (
        <CardPanel className="formCard">
        <div id="radioDiv">
            <Radios />
        </div>
        </CardPanel>
    )
};

export default ProductForm;