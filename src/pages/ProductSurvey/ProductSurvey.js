import React, { useState } from "react";
import { Button } from "materialize-css";
import Header from "../../Components/Header/Header";
import ProductForm from "../../Components/ProductForm/ProductForm";
import LeadForm from "../../Components/LeadForm/LeadForm";
import MyFooter from "../../Components/Footer/Footer";

import products from "../../constants/products";
import LeadsForm from "../../Components/LeadForm/LeadForm";


const ProductSurvey = props => {

    const [step, setStep] = useState(1);
    let url = props.match.params.product;

    let productIndex = 0;

    const [count, setCount] = useState(1);
    let currentObj;

    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");

    // useEffect(() => , []);

    const getCurrentProduct = () => {
        productIndex = 0;
        for (let i = 0; i < products.products.length; i++) {
            if (url === products.products[i].name) {
                productIndex = i;
                // console.log("this worked! " + products.products[i].name + " array of" + i);
            }
        }
        currentObj = products.products[productIndex]
        return currentObj;
    }

    getCurrentProduct();


    let radioQ;
    let radioH;
    let radioI;
    let renderButton;

    switch (count) {
        case 1:
            radioH = currentObj.header1
            radioQ = currentObj.questions1;
            radioI = currentObj.icons1;
            renderButton = "noback";
            break;
        case 2:
            radioH = currentObj.header2;
            radioQ = currentObj.questions2;
            radioI = currentObj.icons2;
            renderButton = "back";
            break;
        case 3:
            if (currentObj.header3) {
                radioH = currentObj.header3
                radioQ = currentObj.questions3;
                radioI = currentObj.icons3;
                renderButton = "back";
                break;
            } else {
                setCount(count + 1);
                setStep(step + 1);
                break

            };

    };

    const updateCount = () => {
        setCount(count + 1);
        setStep(step + 1);
        // console.log("this is step: " + step);
        // console.log("this is count: " + count);
    }

    const backStep = () => {
        if (currentObj.header3) {
            setCount(count - 1);
            setStep(step - 1);
        } else if (!currentObj.header3 && count === 4) {
            setCount(count - 2);
            setStep(step - 2);
        } else {
            setCount(count - 1);
            setStep(step - 1);
        }
        console.log("count is " + count);
        console.log("step is " + step);
    }

    // console.log(radioI);
    // console.log(radioQ);

    const checkAnswer = (answer) => {
        if (step === 1) {
            if(answer==="") {
                return;
            }
            setAnswer1(answer)
        }
        else if (step === 2) {
            if(answer==="") {
                return;
            }
            setAnswer2(answer)
        }
        else if (step === 3) {
            if(answer==="") {
                return;
            }
            setAnswer3(answer)
        }
    }

    console.log("answer 1: " + answer1);
    console.log("answer 2: " + answer2);
    console.log("answer 3: " + answer3);

    const renderSwitch = () => {
        switch (step) {
            case 1:
                console.log("mic check mic check");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}
                    checkAnswer={checkAnswer}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    step={step}

                />;
            case 2:
                console.log("mic check mic check2");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}
                    checkAnswer={checkAnswer}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    step={step}


                />;
            case 3:
                console.log("mic check mic check3");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}
                    checkAnswer={checkAnswer}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    step={step}


                />;
            case 4:
                return <LeadForm
                    backStep={backStep}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                />;
        }
    }



    return (
        <div>
            <Header
                partnerLink={"/partners"}
                productLink={"/#productHome"}
            />
            {renderSwitch()}
            <MyFooter />
        </div>
    );
};

export default ProductSurvey;