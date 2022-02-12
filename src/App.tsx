import React from "react";

import "./App.scss";
import Header from "./components/header";
import ProductDescription from "./widgets/product-description";

function App() {
  return (
    <main className="container">
      <Header />
      <ProductDescription />
    </main>
  );
}

export default App;
