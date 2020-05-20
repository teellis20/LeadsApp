import React, { useState, useEffect } from "react";
import { CardPanel, Button } from "react-materialize";

import Header from "../Header/Header";
import MyFooter from "../Footer/Footer";

import "./productForm.css";
import products from "../../constants/products.js";

// changes were made here on out
// just to make sure I don't miss it

const ProductForm = props => {
    // let url = props.match.params.product;

    // let url = props.currentUrl;
    // console.log(url + "is type of " + typeof (url));
//     let productIndex = 0;
    
//     const [count, setCount] = useState(1);
//     const [step, setStep] = useState(props.step);
//     let currentObj;

//     // useEffect(() => , []);

//     const getCurrentProduct = () => {
//         productIndex = 0;
//         for (let i = 0; i < products.products.length; i++) {
//             if (url === products.products[i].name) {
//                 productIndex = i;
//                 // console.log("this worked! " + products.products[i].name + " array of" + i);
//             }
//         }
//         currentObj = products.products[productIndex]
//         return currentObj;
//     }

//     // marker to show test
    
//     getCurrentProduct();

//     let radioQ;
//     let radioH;
//     let radioI;
//     let renderButton;

//     switch (count) {
//         case 1:
//             radioH = currentObj.header1
//             radioQ = currentObj.questions1;
//             radioI = currentObj.icons1;
//             break;
//         case 2:
//             radioH = currentObj.header2;
//             radioQ = currentObj.questions2;
//             radioI = currentObj.icons2;
//             renderButton = <Button id="backBttn" onClick={() => {backStep()}} > Back </Button>;
//             break;
//         case 3:
//             if (currentObj.header3) {
//                 radioH = currentObj.header3
//                 radioQ = currentObj.questions3;
//                 radioI = currentObj.icons3;
//                 renderButton = <Button id="backBttn" onClick={() => {backStep()}} > Back </Button>;
//                 break;
//             } else {
//                 setCount(count + 1);
//                 setStep(step + 1);
                
//             };
//             break;
            
//     };

//    const updateCount = () => {
//        setCount(count + 1);
//        setStep(step + 1);
//        console.log( "this is step: " + step);
//        console.log( "this is count: " + count);
//    }
   
//    const backStep = () => {
//        setCount(count - 1);
//        setStep(step - 1);
//    }
    
//     // console.log(radioI);
//     // console.log(radioQ);

    // const [newButton, setNewButton] = useState(props.renderButton);

    // console.log(newButton);

    const GetBackButton = () => {
        if (props.renderButton === "back") {
            console.log(props.renderButton);
            return <Button id="backBttn" onClick={() => { props.backStep() }} > Back </Button>
        } else {
            console.log(props.renderButton)
            return null;
        }
    }


    const Radios = () => {

        // console.log("this is test/ array number " + productIndex);
        let indexNum = 0;
        let currentProduct = props.radioQ.map((item) => {
            // console.log("new line" + currentObj.icons1[3]);
            indexNum = props.radioQ.indexOf(item);
            return (
                <div className="customRadio">
                    {/* <CardPanel> */}
                    <input
                        className="with-gap" type="radio" name="product"
                        id={props.currentObj.name} value={props.currentObj.name} />
                    <label htmlFor={props.currentObj.name}>
                        <img className="radioImage hoverable"
                            src={props.radioI[indexNum]}
                            alt={item} />
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
        <div>
            <div className="content-wrap" >
                {/* <Header
                    partnerLink={"/partners"}
                    productLink={"/#productHome"}
                /> */}
                <div className="productFormContainer">
                    <CardPanel className="formCard">
                        <h2>{props.radioH}</h2>
                        <div id="radioDiv">
                            <Radios />
                        </div>
                        <GetBackButton />
                        <Button id="productBttn" onClick={() => props.updateCount()}> Next </Button>
                    </CardPanel>
                </div>
            </div>
            {/* <MyFooter /> */}
        </div>
    )
};

export default ProductForm;