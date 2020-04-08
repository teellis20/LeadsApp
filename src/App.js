import React from 'react';
import logo from './logo.svg';
import Header from "./Components/Header/Header";
import LeadsForm from './Components/LeadForm/LeadForm';
import HowTo from './Components/HowTo/HowTo';
import Partner from './Components/Partner/Partner';
import ProductForm from "./Components/ProductForm/ProductForm";

function App() {
  return (
    <div>
      <Header />
      <HowTo />
      <Partner />
      <ProductForm />
      {/* <LeadsForm /> */}
    </div>
  );
}

export default App;
